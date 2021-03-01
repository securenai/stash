import React, { useState } from 'react';
import Login from '../Login/Login';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<Route exact path="/" component={Home} />
			<Route path="/login" render={() => <Login />} />
		</BrowserRouter>
	);
};

export default App;
