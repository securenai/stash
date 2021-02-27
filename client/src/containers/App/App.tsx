import React, { useState } from 'react';
import Login from '../Login/Login';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const [loggedIn, setloggedIn] = useState(false);

	const changeLoginState = () => {
		setloggedIn(true);
	};

	return loggedIn === true ? (
		<div>logged in!!</div>
	) : (
		<Login login={changeLoginState} />
	);
};

export default App;
