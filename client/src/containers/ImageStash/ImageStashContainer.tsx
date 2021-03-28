import React, { useEffect, useState } from 'react';
import ImageStash from '../../components/DashMain/ImageStash/ImageStash';
import { useSelector } from 'react-redux';
import { selectCurrentStash } from '../../slices/appSlice';
import { selectUser } from '../../slices/userSlice';

export interface ImageStashContainerProps {}

const ImageStashContainer: React.FC<ImageStashContainerProps> = () => {
	const currStash = useSelector(selectCurrentStash);
	const user = useSelector(selectUser);
	const [imageIds, setImageIds] = useState([]);

	useEffect(() => {
		const folderName = `stash/imageStash/${user.userInfo._id}/${currStash.id}`;
		const options = {
			method: 'POST',
			body: JSON.stringify({ folderName }), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/stashImages/query', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((result) => {
				console.log(result);
				setImageIds(result);
			});
	}, []);

	const uploadImage = (data: File, fileName: string) => {
		console.log('dddlololol');
		const saveTo = `stash/imageStash/${user.userInfo._id}/${currStash.id}/${fileName}`;
		const options = {
			method: 'POST',
			body: JSON.stringify({ data, saveTo }), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/stashImages/upload', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((result) => {
				console.log(result.msg);
			});
	};

	// const loadImages = async () => {
	//     try {
	//         const res = await fetch('http://localhost:5000/api/stashImages/load')
	// 		const data = await res.json();
	// 		setImageIds(data)
	//     } catch (error) {
	//         console.log(error)
	//     }
	// }

	const checkStatus = (response) => {
		if (response.ok) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	};

	return (
		<ImageStash
			currentStash={currStash}
			uploadImage={(data, fileName) => uploadImage(data, fileName)}
			imageIds={imageIds}
		/>
	);
};

export default ImageStashContainer;
