import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUser,
	selectUserStashList,
	setUserStashList
} from '../../slices/userSlice';
import { selectCurrentStash } from '../../slices/appSlice';
import { setAppInfo } from '../../slices/appSlice';
import StashListHeader from '../../components/DashSide/StashListHeader/StashListHeader';
import StashList from '../../components/DashSide/StashList/StashList';
import StashCreateModal from '../../components/DashSide/StashCreateModal/StashCreateModal';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import moment from 'moment';
export interface StashListProps {}

const StashListContainer: React.FC<StashListProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const userStashList = useSelector(selectUserStashList);
	const currentStash = useSelector(selectCurrentStash);
	// const [stashItems, setStashItems] = useState([]);
	const [openStashCreateWindow, setOpenStashCreateWindow] = useState(false);

	useEffect(() => {
		const data = { uid: user.userInfo._id };
		async function fetchData() {
			const result = await fetchApi(data, 'userInventory/query');
			console.log(result);
			if (result.stashes) {
				dispatch(setUserStashList(result.stashes));
				// setStashItems(result.stashes)
			}
		}
		fetchData();
	}, [currentStash]);

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

	const handleCreateStash = async (
		stashName: string,
		stashType: string
		// stashId: string
	) => {
		const data = {
			name: stashName,
			type: stashType,
			owner: user.userInfo._id
			// stashId: user.userInfo._id + moment().format('YYYYMMDDhhmmss')
		};
		const result: any = await fetchApi(data, 'userInventory/create');
		console.log(result);
		console.log(result.name);
		if (result.name) {
			dispatch(
				setAppInfo({
					currentStash: {
						id: result._id,
						name: result.name,
						type: result.type
					}
				})
			);
		}
	};

	return (
		<div className="stashList-container">
			<div>
				<StashListHeader createStash={handleCreateStashWindow} />
				<StashList
					stashItems={userStashList}
					currentStash={currentStash}
					itemClick={handleItemClick}
				/>
			</div>
			<div>
				{openStashCreateWindow === true ? (
					<StashCreateModal
						closeCreate={handleCloseCreateStashWindow}
						createStash={handleCreateStash}
					/>
				) : null}
			</div>
		</div>
	);
};

export default StashListContainer;
