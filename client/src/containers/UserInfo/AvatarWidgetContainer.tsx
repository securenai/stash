import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { login, logout } from '../../slices/userSlice';
import AvatarWidget from '../../components/Widgets/AvatarChanger/AvatarWidget';
import { fetchApi } from '../../api/fetchApi/fetchApi';

export interface AvatarWidgetContainerProps {}

const AvatarWidgetContainer: React.FC<AvatarWidgetContainerProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const [selectedAvatar, setSelectedAvatar] = useState(null);

	const handleOnAvatarChange = (img) => {
		setSelectedAvatar(img);
	};

	useEffect(() => {
		if (selectedAvatar === null) {
			return;
		}
		uploadImage(selectedAvatar);
	}, [selectedAvatar]);

	const queryAvatar = async () => {
		const folderName = `stash/userAvatars/${user.userInfo._id}`;
		// const options = {
		// 	method: 'POST',
		// 	body: JSON.stringify({ folderName }), // data can be `string` or {object}!
		// 	headers: new Headers({
		// 		'Content-Type': 'application/json'
		// 	})
		// };
		const result = await fetchApi({ folderName }, 'avatar/query');
		if (result) {
			localStorage.setItem('userAvatar', JSON.stringify(selectedAvatar));
		}
		// fetch('http://localhost:5000/api/avatar/query', options)
		// 	.then(checkStatus)
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((result) => {
		// 		localStorage.setItem('userAvatar', JSON.stringify(selectedAvatar));
		// 	});
	};

	const uploadImage = async (data: File) => {
		// setStartUpload(true);
		// setUploadComplete(false);
		const userId = user.userInfo._id;
		const saveTo = `stash/userAvatars/${user.userInfo._id}/Avatar`;
		const result = await fetchApi({ userId, data, saveTo }, 'avatar/upload');
		if (result) {
			if (result.url != null) {
				const user2 = JSON.parse(JSON.stringify(user));
				user2.userInfo.avatarUrl = result.url;
				dispatch(
					login({
						token: user2.token,
						expiresAt: user2.expiresAt,
						userInfo: user2.userInfo,
						isAuthenticated: user2.isAuthenticated
					})
				);
				setTimeout(() => {
					queryAvatar();
				}, 300);
			}
		}
		// const options = {
		// 	method: 'POST',
		// 	body: JSON.stringify({ userId, data, saveTo }), // data can be `string` or {object}!
		// 	headers: new Headers({
		// 		'Content-Type': 'application/json'
		// 	})
		// };
		// fetch('http://localhost:5000/api/avatar/upload', options)
		// 	.then(checkStatus)
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((result) => {
		// 		if (result.url != null) {
		// 			// setUploadComplete(true);
		// 			// setStartUpload(false);
		// 			// dispatch
		// 			const user2 = JSON.parse(JSON.stringify(user));
		// 			user2.userInfo.avatarUrl = result.url;
		// 			dispatch(
		// 				login({
		// 					token: user2.token,
		// 					expiresAt: user2.expiresAt,
		// 					userInfo: user2.userInfo,
		// 					isAuthenticated: user2.isAuthenticated
		// 				})
		// 			);
		// 			setTimeout(() => {
		// 				queryAvatar();
		// 			}, 300);
		// 		}
		// 	});
	};

	// const checkStatus = (response) => {
	// 	if (response.ok) {
	// 		return Promise.resolve(response);
	// 	} else {
	// 		return Promise.reject(new Error(response.statusText));
	// 	}
	// };

	return (
		<AvatarWidget
			changeAvatar={handleOnAvatarChange}
			avatarUrl={user.userInfo.avatarUrl}
		/>
	);
};

export default AvatarWidgetContainer;
