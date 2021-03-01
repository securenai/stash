import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../slices/userSlice';
import { selectUser } from '../../slices/userSlice';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const handleLogout = () => {
		console.log('ppp');
		dispatch(logout());
	};
	return (
		<>
			{!user && <Redirect to="/Login" />}
			<div>
				<Header />
				this is home
				<button onClick={handleLogout}>logout</button>
			</div>
		</>
	);
};

export default Home;
