import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUser,
	selectUserStashList,
	setUserStashList
} from '../../slices/userSlice';
import { selectCurrentStash, setSelectedImages } from '../../slices/appSlice';
import { setAppInfo } from '../../slices/appSlice';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import moment from 'moment';
import _ from 'lodash';
import StashListHeader from '../../components/DashBoard/DashSide/DashSideMiddle/StashListHeader/StashListHeader';
import StashList from '../../components/DashBoard/DashSide/DashSideMiddle/StashList/StashList';
import StashCreateModal from '../../components/DashBoard/DashSide/DashSideMiddle/StashCreateModal/StashCreateModal';
import StashEditModal from '../../components/DashBoard/DashSide/DashSideMiddle/StashEditModal/StashEditModal';
import { setLocalStorage } from '../../api/utils/localStorageUtils';
import Modal from '../../components/Widgets/Modal/Modal';

export interface StashListProps {}

const StashListContainer: React.FC<StashListProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const userStashList = useSelector(selectUserStashList);
	const currentStash = useSelector(selectCurrentStash);
	const [showStashCreateModal, setShowStashCreateModal] = useState(false);
	const [showStashEditModal, setShowStashEditModal] = useState(false);
	const [filteredStashList, setFilteredStashList] = useState([]);
	interface StashData {
		id: string;
		type: string;
		name: string;
	}
	const [editingData, setEditingData] = useState<StashData>({
		id: '',
		type: '',
		name: ''
	});

	useEffect(() => {
		initCurrentStash();
		queryStashList();
	}, []);

	const initCurrentStash = () => {
		if (currentStash.owner !== user.userInfo._id) {
			dispatch(
				setAppInfo({
					currentStash: {}
				})
			);
		}
	};

	const queryStashList = async () => {
		const data = { uid: user.userInfo._id };
		const result = await fetchApi(data, 'userInventory/query');
		if (result.stashes) {
			dispatch(setUserStashList(result.stashes));
			setFilteredStashList(result.stashes);
		} else if (result.length === 0) {
			dispatch(setUserStashList([]));
			dispatch(
				setAppInfo({
					currentStash: {}
				})
			);
			setFilteredStashList([]);
		}
	};

	const handleItemClick = (id: string, type: string, name: string) => {
		const owner = user.userInfo._id;
		localStorage.setItem(
			'currentStash',
			JSON.stringify({ id, type, name, owner })
		);
		dispatch(
			setAppInfo({
				currentStash: { id, type, name, owner }
			})
		);
		dispatch(
			setSelectedImages({
				selectedImages: []
			})
		);
	};

	const handleCloseEditStashWindow = () => {
		setShowStashEditModal(false);
	};

	const handleIconClick = (id: string, type: string, name: string) => {
		setEditingData({ id, type, name });
		setShowStashEditModal(true);
	};

	const handleSavedChanges = async (
		editInfo: {
			id: string;
			type: string;
			name: string;
		},
		options: boolean[]
	) => {
		handleCloseEditStashWindow();
		if (options[0]) {
			// edit
			const data = { id: editInfo.id, name: editInfo.name };
			const result = await fetchApi({ data }, 'userInventory/update');
			if (result) {
				dispatch(
					setAppInfo({
						currentStash: {
							id: result._id,
							name: result.name,
							type: result.type
						}
					})
				);
				queryStashList();
			}
		} else if (options[1]) {
			// copy
			const data = {
				name: editInfo.name,
				type: editInfo.type,
				owner: user.userInfo._id
			};
			const result = await fetchApi(data, 'userInventory/create');
			if (result) {
				setFilteredStashList([...filteredStashList, result]);
				dispatch(setUserStashList([...userStashList, result]));
				dispatch(
					setAppInfo({
						currentStash: {
							id: result._id,
							name: result.name,
							type: result.type,
							owner: user.userInfo._id
						}
					})
				);
				setLocalStorage({
					currentStash: {
						id: result._id,
						name: result.name,
						type: result.type,
						owner: user.userInfo._id
					}
				});
			}
			// result && queryStashList();
		} else if (options[2]) {
			// delete
			const data = {
				id: editInfo.id,
				type: editInfo.type,
				name: editInfo.name
			};
			const result = await fetchApi({ data }, 'userInventory/delete');
			if (result) {
				// dispatch(setUserStashList({userStashList : {

				// }}))

				dispatch(
					setAppInfo({
						currentStash: {
							id: filteredStashList[0]._id,
							name: filteredStashList[0].name,
							type: filteredStashList[0].type
						}
					})
				);
				setLocalStorage({
					currentStash: {
						id: filteredStashList[0]._id,
						name: filteredStashList[0].name,
						type: filteredStashList[0].type
					}
				});
				queryStashList();
			}
		}
	};

	const handleCloseCreateStashWindow = () => {
		setShowStashCreateModal(false);
	};

	const handleCreateStashWindow = () => {
		setShowStashCreateModal(true);
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
		const result = await fetchApi(data, 'userInventory/create');
		if (result.name) {
			setFilteredStashList([...filteredStashList, result]);
			dispatch(setUserStashList([...userStashList, result]));
			dispatch(
				setAppInfo({
					currentStash: {
						id: result._id,
						name: result.name,
						type: result.type
					}
				})
			);
			setLocalStorage({
				currentStash: {
					id: result._id,
					name: result.name,
					type: result.type
				}
			});
		}
	};

	const handleOnInputChange = (val: string) => {
		const filterList = _.filter(userStashList, (item) => {
			return _.startsWith(item.name.toLowerCase(), val.toLowerCase());
		});
		setFilteredStashList(filterList);
	};

	return (
		<>
			<StashListHeader
				createStash={handleCreateStashWindow}
				onInputChange={handleOnInputChange}
			/>
			<StashList
				stashItems={filteredStashList}
				currentStash={currentStash}
				itemClick={handleItemClick}
				iconClick={handleIconClick}
			/>
			<Modal
				showModal={showStashCreateModal}
				closeModal={handleCloseCreateStashWindow}
				children={
					<StashCreateModal
						createStash={handleCreateStash}
						closeCreate={handleCloseCreateStashWindow}
					/>
				}
			/>
			<Modal
				showModal={showStashEditModal}
				closeModal={handleCloseEditStashWindow}
				children={
					<StashEditModal
						closeEdit={handleCloseEditStashWindow}
						saveChanges={handleSavedChanges}
						editingData={editingData}
					/>
				}
			/>
		</>
	);
};

export default StashListContainer;
