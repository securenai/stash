import React, { useEffect, useState } from 'react';
import ImageStash from '../../components/DashBoard/DashMain/ImageCategory/ImageStash/ImageStash';
import { useSelector } from 'react-redux';
import {
	selectCurrentStash,
	selectSideBarClosed,
	setSideBarClosed,
	selectSelectedImages,
	setSelectedImages
} from '../../slices/appSlice';
import { selectUser } from '../../slices/userSlice';
import Processing from '../../components/Widgets/Processing/Processing';
import DashMainHeader from '../../components/DashBoard/DashMain/DashMainHeader/DashMainHeader';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import ImageViewer from '../../components/Widgets/Viewer/ImageViewer/ImageViewer';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

export interface ImageStashContainerProps {}

const ImageStashContainer: React.FC<ImageStashContainerProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const currStash = useSelector(selectCurrentStash);
	const selectedImages = useSelector(selectSelectedImages);
	const sideBarClosed = useSelector(selectSideBarClosed);
	const [imageFiles, setImageFiles] = useState([]);
	const [startUpload, setStartUpload] = useState(false);
	const [uploadComplete, setUploadComplete] = useState(false);
	const [showImageViewer, setShowImageViewer] = useState(false);
	const [currentImageSrc, setCurrentImageSrc] = useState('');
	const [multiSelectedImages, setMultiSelectedImages] = useState([]);
	const [imageSelectedCleared, setImageSelectedCleared] = useState(false);

	useEffect(() => {
		queryFiles(true);
	}, [currStash]);

	useEffect(() => {
		if (multiSelectedImages.length > 0) {
			const clone = _.cloneDeep(multiSelectedImages);
			dispatch(
				setSelectedImages({
					selectedImages: _.filter(clone, (img) => {
						return img.selected;
					})
				})
			);
		}
	}, [multiSelectedImages]);

	const uploadImage = async (data: File, fileName: string) => {
		setStartUpload(true);
		setUploadComplete(false);
		const saveTo = `stash/imageStash/${user.userInfo._id}/${currStash.id}/${fileName}`;
		const result = await fetchApi({ data, saveTo }, 'imageStash/upload');
		if (result.msg === 'file uploaded') {
			setUploadComplete(true);
			setStartUpload(false);
			// setImageFiles(...imageFiles, );
			setTimeout(() => {
				queryFiles(false);
			}, 2000);
		}
	};

	const queryFiles = async (showProgressBar: boolean) => {
		if (showProgressBar) {
			setStartUpload(true);
			setUploadComplete(false);
		}
		const folderName = `stash/imageStash/${user.userInfo._id}/${currStash.id}`;
		const result = await fetchApi({ folderName }, 'imageStash/query');
		if (result) {
			setUploadComplete(true);
			setStartUpload(false);
			setImageFiles(result);
		}
	};

	const handleDeleteImage = async (src: string) => {
		setStartUpload(true);
		setUploadComplete(false);
		const result = await fetchApi({ id: src }, 'imageStash/deleteById');
		if (result.msg === 'file deleted') {
			setUploadComplete(true);
			setStartUpload(false);
			setTimeout(() => {
				queryFiles(false);
			}, 1000);
		}
	};

	const handleViewImage = (src: string) => {
		setShowImageViewer(true);
		setCurrentImageSrc(src);
	};

	const handleOpenStashList = () => {
		dispatch(setSideBarClosed({ sideBarClosed: false }));
	};

	const handleSetSelectedImages = (image: any) => {
		image.selected = !image.selected;
		const cloneArr = _.cloneDeep(imageFiles).filter((img) => {
			return img.public_id !== image.public_id;
		});
		setMultiSelectedImages([...cloneArr, image]);
	};

	const handleBatchDelete = async () => {
		const result = await fetchApi({ selectedImages }, 'imageStash/deleteAll');
		if (result.msg === 'files deleted') {
			setUploadComplete(true);
			setStartUpload(false);
			setTimeout(() => {
				queryFiles(false);
			}, 2000);
		}
	};

	const handleBatchClear = () => {
		const copy = _.cloneDeep(selectedImages);
		_.forEach(copy, (img) => {
			img.selected = false;
		});
		dispatch(
			setSelectedImages({
				selectedImages: copy
			})
		);
		setImageSelectedCleared(true);

		const copy2 = _.cloneDeep(imageFiles);
		_.forEach(copy2, (img) => {
			img.selected = false;
		});
		setImageFiles(copy2);
		dispatch(
			setSelectedImages({
				selectedImages: []
			})
		);
	};

	const handleBatchSelect = () => {
		const copy = _.cloneDeep(selectedImages);
		_.forEach(copy, (img) => {
			img.selected = true;
		});
		dispatch(
			setSelectedImages({
				selectedImages: copy
			})
		);
		const copy2 = _.cloneDeep(imageFiles);
		_.forEach(copy2, (img) => {
			img.selected = true;
		});
		setImageFiles(copy2);
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
				selectedImages={selectedImages}
				batchDelete={handleBatchDelete}
				batchClear={handleBatchClear}
				batchSelect={handleBatchSelect}
				queryImageFiles={() => queryFiles(true)}
			/>
			{uploadComplete === false && startUpload === true ? <Processing /> : null}
			<ImageStash
				// uploadImage={(data, fileName) => uploadImage(data, fileName)}
				imageFiles={imageFiles}
				imageClicked={handleViewImage}
				deleteImage={handleDeleteImage}
				pickSelectedImages={handleSetSelectedImages}
				selectedImages={selectedImages}
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
