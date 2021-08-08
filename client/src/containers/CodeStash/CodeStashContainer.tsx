import React, { useState, useEffect } from 'react';
import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';
import { selectCurrentStash } from '../../slices/appSlice';
import CodeStash from '../../components/DashBoard/DashMain/CodeCategory/CodeStash/CodeStash';
import DashMainHeader from '../../components/DashBoard/DashMain/DashMainHeader/DashMainHeader';
import Processing from '../../components/Widgets/Processing/Processing';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import moment from 'moment';

export interface CodeStashContainerProps {}

const CodeStashContainer: React.FC<CodeStashContainerProps> = () => {
	const user = useSelector(selectUser);
	const currStash = useSelector(selectCurrentStash);
	const [codeList, setCodeList] = useState([]);
	const [startUpdate, setStartUpdate] = useState(false);
	const [updateComplete, setUpdateComplete] = useState(false);

	useEffect(() => {
		queryCodeList();
	}, [currStash]);

	const queryCodeList = async () => {
		setStartUpdate(true);
		setUpdateComplete(false);
		const data = currStash.id;
		const result = await fetchApi({ data }, 'codeStash/query');
		// console.log(typeof result);
		if (result.codeStashList) {
			setStartUpdate(false);
			setUpdateComplete(true);
			setCodeList(result.codeStashList);
		}
	};

	const handleSaveCode = async (id: string, topic: string, code: string) => {
		setStartUpdate(true);
		setUpdateComplete(false);
		const data = {
			_id: id,
			owner: user.userInfo._id,
			topic: topic,
			content: code,
			modifiedDate: moment().format('YYYY-MM-DD')
		};
		const result = await fetchApi(data, 'codeStash/update');
		if (result) {
			setStartUpdate(false);
			setUpdateComplete(true);
			queryCodeList();
		}
	};

	const handleDeleteCode = async (id: string) => {
		setStartUpdate(true);
		setUpdateComplete(false);
		const data = id;
		const result = await fetchApi({ data }, 'codeStash/delete');
		if (result) {
			setStartUpdate(false);
			setUpdateComplete(true);
			queryCodeList();
		}
	};

	const handleAddCode = async () => {
		const data = {
			owner: user.userInfo._id,
			topic: 'New Code',
			content: '// type code here',
			createDate: moment().format('YYYY-MM-DD'),
			modifiedDate: moment().format('YYYY-MM-DD'),
			stashId: currStash.id
		};
		const result = await fetchApi(data, 'codeStash/create');
		if (result) {
			setCodeList([result, ...codeList]);
			queryCodeList();
		}
	};

	return (
		<>
			<DashMainHeader
				stashType={currStash.type}
				stashName={currStash.name}
				addCodeStashItem={handleAddCode}
			/>
			{updateComplete === false && startUpdate === true ? <Processing /> : null}
			<CodeStash
				codeList={codeList}
				saveCode={handleSaveCode}
				deleteCode={handleDeleteCode}
			/>
		</>
	);
};

export default CodeStashContainer;
