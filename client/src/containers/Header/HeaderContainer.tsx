import React from 'react';
import { Header } from '../../components/Header/Header';
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';

export interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
	const user = useSelector(selectUser);
	return <Header user={user} />;
};

export default HeaderContainer;
