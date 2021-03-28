import React, { useState, useEffect } from 'react';
import './StashList.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentStash } from '../../slices/appSlice';
import { StashItem } from '../../components/StashItem/StashItem';
import { setAppInfo } from '../../slices/appSlice';
export interface StashListProps {}

const StashList: React.FC<StashListProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const currentStash = useSelector(selectCurrentStash);
	const [stashItems, setStashItems] = useState([]);

	useEffect(() => {
		const uid = user.userInfo._id;
		console.log(uid);
		const data = { uid };
		console.log(JSON.stringify(data));
		const options = {
			method: 'POST',
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/userInventory', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((arr) => {
				if (arr.length !== 0) setStashItems(arr.stashes);
			});
	}, []);

	const checkStatus = (response) => {
		if (response.ok) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	};

	const handleItemClick = (id, type, name) => {
		localStorage.setItem('currentStash', JSON.stringify({ id, type, name }));
		dispatch(
			setAppInfo({
				currentStash: { id, type, name }
			})
		);
	};

	return (
		<div className="stashList-container">
			<div className="stashList">
				<h4 className="stashList-title">My Stash</h4>
				<ul className="stashList-list">
					{stashItems.length ? (
						stashItems.map((item) => {
							const isCurr = item._id === currentStash.id;
							return (
								<StashItem
									itemId={item._id}
									itemName={item.name}
									itemType={item.type}
									onItemClick={handleItemClick}
									isCurr={isCurr}
									key={item.name}
								/>
							);
						})
					) : (
						<div>your stash is currently empty</div>
					)}
				</ul>
			</div>
		</div>
	);
};

export default StashList;
