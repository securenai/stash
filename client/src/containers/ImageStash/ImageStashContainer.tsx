import React, { useEffect, useState } from 'react';
import ImageStash from '../../components/DashBoard/DashMain/ImageCategory/ImageStash/ImageStash';
import { useSelector } from 'react-redux';
import { selectCurrentStash } from '../../slices/appSlice';
import { selectUser } from '../../slices/userSlice';
import Processing from '../../components/Widgets/Processing/Processing';
import DashMainHeader from '../../components/DashBoard/DashMain/DashMainHeader/DashMainHeader';
import { fetchApi } from '../../api/fetchApi/fetchApi';

export interface ImageStashContainerProps {}

const ImageStashContainer: React.FC<ImageStashContainerProps> = () => {
	const user = useSelector(selectUser);
	const currStash = useSelector(selectCurrentStash);
	const [imageFiles, setImageFiles] = useState([]);
	const [startUpload, setStartUpload] = useState(false);
	const [uploadComplete, setUploadComplete] = useState(false);

	useEffect(() => {
		console.log('qqq');
		queryFiles();
	}, [currStash]);

	const uploadImage = async (data: File, fileName: string) => {
		setStartUpload(true);
		setUploadComplete(false);
		const saveTo = `stash/imageStash/${user.userInfo._id}/${currStash.id}/${fileName}`;
		const result = await fetchApi({ data, saveTo }, 'stashImages/upload');
		if (result.msg === 'file uploaded') {
			setUploadComplete(true);
			setStartUpload(false);
			queryFiles();
			setTimeout(() => {
				queryFiles();
			}, 100);
		}
	};

	const queryFiles = async () => {
		setStartUpload(true);
		setUploadComplete(false);
		const folderName = `stash/imageStash/${user.userInfo._id}/${currStash.id}`;
		const result = await fetchApi({ folderName }, 'stashImages/query');
		if (result) {
			setUploadComplete(true);
			setStartUpload(false);
			setImageFiles(result);
		}
	};

	return (
		<>
			<DashMainHeader
				stashType="image"
				stashName={currStash.name}
				uploadImage={uploadImage}
			/>
			{uploadComplete === false && startUpload === true ? <Processing /> : null}
			<ImageStash
				uploadImage={(data, fileName) => uploadImage(data, fileName)}
				imageFiles={imageFiles}
			/>
		</>
	);
};

export default ImageStashContainer;
