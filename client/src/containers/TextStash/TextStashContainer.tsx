import React, { useEffect, useState } from 'react';
import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';
import {
	selectCurrentStash,
	selectSideBarClosed,
	setSideBarClosed
} from '../../slices/appSlice';
import DashMainHeader from '../../components/DashBoard/DashMain/DashMainHeader/DashMainHeader';
import TextStash from '../../components/DashBoard/DashMain/TextCategory/TextStash/TextStash';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import Processing from '../../components/Widgets/Processing/Processing';
import moment from 'moment';
import { useDispatch } from 'react-redux';

export interface TextStashHeaderProps {}

const TextStashHeader: React.FC<TextStashHeaderProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const currStash = useSelector(selectCurrentStash);
	const sideBarClosed = useSelector(selectSideBarClosed);
	const [textList, setTextList] = useState([]);
	const [startUpdate, setStartUpdate] = useState(false);
	const [updateComplete, setUpdateComplete] = useState(false);

	useEffect(() => {
		queryTextStashList();
	}, [currStash]);

	const queryTextStashList = async () => {
		setStartUpdate(true);
		setUpdateComplete(false);
		const data = currStash.id;
		const result = await fetchApi({ data }, 'textStash/query');
		if (result.textStashList) {
			console.log('done');
			setStartUpdate(false);
			setUpdateComplete(true);
			setTextList(result.textStashList);
		}
	};

	const handleAddText = async () => {
		const data = {
			owner: user.userInfo._id,
			title: '',
			// content: '// type code here',
			createDate: moment().format('YYYY-MM-DD'),
			modifiedDate: moment().format('YYYY-MM-DD'),
			stashId: currStash.id
		};
		const result = await fetchApi(data, 'textStash/create');
		if (result) {
			setTextList([result, ...textList]);
			queryTextStashList();
		}
	};

	const handleFetchIframe = (url: string): Promise<any> => {
		return new Promise(function (resolve, reject) {
			const keyHashed = '738465f425d6ce9747860070d16a37a7';
			const iframelyUrl = `https://iframe.ly/api/iframely?url=${url}&key=${keyHashed}`;
			// const result = await fetch(iframelyUrl)
			fetch(iframelyUrl)
				.then(checkStatus)
				.then((res) => {
					return res.json();
				})
				.then((result) => {
					console.log(result);
					resolve(result);
				});
		});
	};

	const handleDeleteText = async (id: string) => {
		setStartUpdate(true);
		setUpdateComplete(false);
		const data = id;
		const result = await fetchApi({ data }, 'textStash/delete');
		if (result) {
			setStartUpdate(false);
			setUpdateComplete(true);
			queryTextStashList();
		}
	};

	const handleSaveText = async (
		id: string,
		textStash: {
			title: string;
			link: string;
		}
	) => {
		setStartUpdate(true);
		setUpdateComplete(false);
		const data = {
			_id: id,
			owner: user.userInfo._id,
			title: textStash.title,
			link: textStash.link,
			modifiedDate: moment().format('YYYY-MM-DD')
		};
		const result = await fetchApi(data, 'textStash/update');
		if (result) {
			setStartUpdate(false);
			setUpdateComplete(true);
			queryTextStashList();
		}
	};

	const checkStatus = (response) => {
		if (response.ok) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	};

	const handleOpenStashList = () => {
		dispatch(setSideBarClosed({ sideBarClosed: false }));
	};

	return (
		<>
			<DashMainHeader
				stashId={currStash.id}
				stashType={currStash.type}
				stashName={currStash.name}
				addTextStashItem={handleAddText}
				sideBarClosed={sideBarClosed}
				openStashList={handleOpenStashList}
			/>
			{updateComplete === false && startUpdate === true ? <Processing /> : null}
			<TextStash
				fetchIframe={handleFetchIframe}
				textList={textList}
				deleteText={handleDeleteText}
				saveText={handleSaveText}
			/>
		</>
	);
};

export default TextStashHeader;
