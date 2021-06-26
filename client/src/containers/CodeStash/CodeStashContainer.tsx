import React, { useState, useEffect } from 'react';
import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';
import { selectCurrentStash } from '../../slices/appSlice';
import CodeStash from '../../components/DashMain/CodeCategory/CodeStash/CodeStash';
import DashMainHeader from '../../components/DashMain/DashMainHeader/DashMainHeader';
import { fetchApi } from '../../api/fetchApi/fetchApi';

export interface CodeStashContainerProps {}

const CodeStashContainer: React.FC<CodeStashContainerProps> = () => {
	const user = useSelector(selectUser);
	const currStash = useSelector(selectCurrentStash);
	const [codeList, setCodeList] = useState([]);

	useEffect(() => {
		console.log(currStash);
		queryCodeList();
	}, [currStash]);

	const queryCodeList = () => {
		console.log('loadddddd');
		// const owner = user.userInfo._id;
		const stashId = currStash.id;
		console.log('pppppppppppppppppp', stashId);
		const options = {
			method: 'POST',
			body: JSON.stringify({ stashId }), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/codeStash/query', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((result) => {
				console.log(result);
				if (result.codeStashList) {
					console.log(result);
					console.log('settt');
					setCodeList(result.codeStashList);
				} else {
					setCodeList([]);
				}
			});
	};

	const handleSaveCode = (id: string, topic: string, code: string) => {
		console.log(topic);
		const options = {
			method: 'POST',
			body: JSON.stringify({
				_id: id,
				owner: user.userInfo._id,
				topic: topic,
				content: code,
				createDate: '2021-04-14',
				modifiedDate: '2021-04-14'
			}), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/codeStash/update', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((result) => {
				console.log(result);
				console.log('settt');
				// setCodeList(result);
				queryCodeList();
			});
	};

	const handleDeleteCode = (id: string) => {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				_id: id
			}), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/codeStash/delete', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((result) => {
				console.log(result);
				console.log('del');
				// setCodeList(result);
				queryCodeList();
			});
	};

	const handleAddCode = () => {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				owner: user.userInfo._id,
				topic: 'New Code',
				content: '// type code here',
				createDate: '2021-04-14',
				modifiedDate: '2021-04-14',
				stashId: currStash.id
			}), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/codeStash/create', options)
			.then(checkStatus)
			.then((res) => {
				// console.log(res.json());
				return res.json();
			})
			.then((result) => {
				console.log(result);
				console.log('settt');
				setCodeList([result, ...codeList]);
				queryCodeList();
			});
	};

	const checkStatus = (response) => {
		if (response.ok) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	};

	return (
		<div>
			<DashMainHeader
				stashType={currStash.type}
				stashName={currStash.name}
				addCodeStashItem={handleAddCode}
			/>
			<CodeStash
				codeList={codeList}
				saveCode={handleSaveCode}
				deleteCode={handleDeleteCode}
			/>
		</div>
	);
};

export default CodeStashContainer;
