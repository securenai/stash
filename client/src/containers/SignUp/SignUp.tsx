import React from 'react';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import { SignUp as SignUpPage } from '../../components/SignUp/SignUp';
import moment from 'moment';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
	const createAccount = async (
		email: string,
		username: string,
		password: string
	) => {
		const avatarUrl =
			'http://res.cloudinary.com/dfkw9hdq3/image/upload/v1633941877/stash/userAvatars/default/default_ulclbn.png';
		const createDate = moment().format('YYYY-MM-DD');
		const data = { email, username, password, avatarUrl, createDate };
		const queryResult = await fetchApi(data, 'signup/query');
		if (queryResult.result === true) {
			return true;
		} else {
			const result = await fetchApi(data, 'signup');
			return false;
		}
	};

	return <SignUpPage createAccount={createAccount} />;
};

export default SignUp;
