import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import DashBoardContainer from '../DashBoard/DashBoardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentTheme } from '../../slices/appSlice';
import NotFound from '../../components/Windows/ErrorHandling/NotFound/NotFound';
import { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '../../styles/Theme/Themes';
import SignUp from '../SignUp/SignUp';
import { Page } from '../../components/HomePage/Page/Page';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	// const user = useSelector(selectUser);
	const currentTheme = useSelector(selectCurrentTheme);
	let mode = currentTheme === 'DARK' ? darkMode : lightMode;

	useEffect(() => {
		mode;
	}, [currentTheme]);

	return (
		<ThemeProvider theme={mode}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/about" render={() => <Page pageType="About" />} />
					<Route path="/contact" render={() => <Page pageType="Contact" />} />
					<Route path="/safety" render={() => <Page pageType="Safety" />} />
					<Route path="/support" render={() => <Page pageType="Support" />} />
					<Route path="/myDashBoard" render={() => <DashBoardContainer />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="/signup" render={() => <SignUp />} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
