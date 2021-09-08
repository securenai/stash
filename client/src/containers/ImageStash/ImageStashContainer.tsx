import React, { useEffect, useState } from 'react';
import ImageStash from '../../components/DashBoard/DashMain/ImageCategory/ImageStash/ImageStash';
import { useSelector } from 'react-redux';
import {
	selectCurrentStash,
	selectSideBarClosed,
	setSideBarClosed
} from '../../slices/appSlice';
import { selectUser } from '../../slices/userSlice';
import Processing from '../../components/Widgets/Processing/Processing';
import DashMainHeader from '../../components/DashBoard/DashMain/DashMainHeader/DashMainHeader';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import ImageViewer from '../../components/Widgets/Viewer/ImageViewer/ImageViewer';
import { useDispatch } from 'react-redux';

export interface ImageStashContainerProps {}

const ImageStashContainer: React.FC<ImageStashContainerProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const currStash = useSelector(selectCurrentStash);
	const sideBarClosed = useSelector(selectSideBarClosed);
	const [imageFiles, setImageFiles] = useState([]);
	const [startUpload, setStartUpload] = useState(false);
	const [uploadComplete, setUploadComplete] = useState(false);
	const [showImageViewer, setShowImageViewer] = useState(false);
	const [currentImageSrc, setCurrentImageSrc] = useState('');

	useEffect(() => {
		queryFiles();
	}, [currStash]);

	const uploadImage = async (data: File, fileName: string) => {
		setStartUpload(true);
		setUploadComplete(false);
		const saveTo = `stash/imageStash/${user.userInfo._id}/${currStash.id}/${fileName}`;
		const result = await fetchApi({ data, saveTo }, 'imageStash/upload');
		if (result.msg === 'file uploaded') {
			setUploadComplete(true);
			setStartUpload(false);
			setTimeout(() => {
				queryFiles();
			}, 1000);
		}
	};

	const queryFiles = async () => {
		setStartUpload(true);
		setUploadComplete(false);
		const folderName = `stash/imageStash/${user.userInfo._id}/${currStash.id}`;
		const result = await fetchApi({ folderName }, 'imageStash/query');
		if (result) {
			setUploadComplete(true);
			setStartUpload(false);
			setImageFiles(result);
		}
	};

	const handleDeleteImage = async (src: string) => {
		console.log(src);
		setStartUpload(true);
		setUploadComplete(false);
		console.log('start');
		const result = await fetchApi({ id: src }, 'imageStash/deleteById');
		console.log(result);
		if (result.msg === 'file deleted') {
			setUploadComplete(true);
			setStartUpload(false);
			setTimeout(() => {
				queryFiles();
			}, 1000);
		}
	};

	const handleViewImage = (src: string) => {
		console.log('qqq');
		setShowImageViewer(true);
		setCurrentImageSrc(src);
	};

	const handleOpenStashList = () => {
		dispatch(setSideBarClosed({ sideBarClosed: false }));
	};

	return (
		<>
			<DashMainHeader
				stashId={currStash.id}
				stashType="image"
				stashName={currStash.name}
				uploadImage={uploadImage}
				sideBarClosed={sideBarClosed}
				openStashList={handleOpenStashList}
			/>
			{uploadComplete === false && startUpload === true ? <Processing /> : null}
			<ImageStash
				// uploadImage={(data, fileName) => uploadImage(data, fileName)}
				imageFiles={imageFiles}
				imageClicked={handleViewImage}
				deleteImage={handleDeleteImage}
			/>
			<ImageViewer
				imageSrc={currentImageSrc}
				showViewer={showImageViewer}
				closeViewer={() => setShowImageViewer(false)}
			/>
		</>
	);
};

export default ImageStashContainer;
