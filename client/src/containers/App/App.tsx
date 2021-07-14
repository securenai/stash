import React, { useState } from 'react';
import Login from '../Login/Login';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import DashBoardContainer from '../DashBoard/DashBoardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentTheme } from '../../slices/appSlice';
import NotFound from '../../components/Windows/ErrorHandling/NotFound/NotFound';
import { ThemeProvider } from 'styled-components';
import { darkMode , lightMode} from '../../styles/Theme/Themes'

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const user = useSelector(selectUser);
	const mode = selectCurrentTheme ? lightMode : darkMode // is Light?

	return (
		<ThemeProvider theme={mode}>
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/myDashBoard" render={() => <DashBoardContainer />} />
					<Route path="/login" render={() => <Login />} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
		</ThemeProvider>
	);
};

export default App;
