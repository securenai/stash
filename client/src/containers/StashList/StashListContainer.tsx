import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentStash } from '../../slices/appSlice';
import { StashItem } from '../../components/DashSide/StashItem/StashItem';
import { setAppInfo } from '../../slices/appSlice';
import StashListHeader from '../../components/DashSide/StashListHeader/StashListHeader';
import StashCreateWindow from '../../components/DashSide/StashCreateWindow/StashCreateWindow';
import StashList from '../../components/DashSide/StashList/StashList';
export interface StashListProps {}

const StashListContainer: React.FC<StashListProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const currentStash = useSelector(selectCurrentStash);
	const [stashItems, setStashItems] = useState([]);
	const [openStashCreateWindow, setOpenStashCreateWindow] = useState(false);

	useEffect(() => {
		const uid = user.userInfo._id;
		console.log(uid);
		const data = { uid };
		// console.log(JSON.stringify(data));
		const options = {
			method: 'POST',
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/userInventory/query', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((arr) => {
				if (arr.length !== 0) setStashItems(arr.stashes);
			});
	}, [currentStash]);

	const checkStatus = (response) => {
		console.log('chk');
		if (response.ok) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	};

	const handleItemClick = (id: string, type: string, name: string) => {
		localStorage.setItem('currentStash', JSON.stringify({ id, type, name }));
		dispatch(
			setAppInfo({
				currentStash: { id, type, name }
			})
		);
	};

	const handleCloseCreateStashWindow = () => {
		setOpenStashCreateWindow(false);
	};

	const handleCreateStashWindow = () => {
		setOpenStashCreateWindow(true);
	};

	// const setToCurrentStash = () => {
	// 	dispatch(
	// 		setAppInfo({
	// 			currentStash: { id:, type, name }
	// 		})
	// 	);
	// };

	const handleCreateStash = (
		stashName: string,
		stashType: string,
		stashId: string
	) => {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				name: stashName,
				type: stashType,
				owner: user.userInfo._id,
				stashId: stashId
			}), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/userInventory/create', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((newStash) => {
				dispatch(
					setAppInfo({
						currentStash: {
							id: newStash._id,
							name: newStash.name,
							type: newStash.type
						}
					})
				);
			});
	};

	return (
		<div className="stashList-container">
			<div>
				<StashListHeader createStash={handleCreateStashWindow} />
				<StashList
					stashItems={stashItems}
					currentStash={currentStash}
					itemClick={handleItemClick}
				/>
			</div>
			<div>
				{openStashCreateWindow === true ? (
					<StashCreateWindow
						closeCreate={handleCloseCreateStashWindow}
						createStash={handleCreateStash}
					/>
				) : null}
			</div>
		</div>
	);
};

export default StashListContainer;