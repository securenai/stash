import React, { useState } from 'react';
import Login from '../Login/Login';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import DashBoardContainer from '../DashBoard/DashBoardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import NotFound from '../../components/NotFound/NotFound';
import './App.scss';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const user = useSelector(selectUser);

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/myDashBoard" render={() => <DashBoardContainer />} />
					<Route path="/login" render={() => <Login />} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
