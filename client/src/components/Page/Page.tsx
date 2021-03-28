import React from 'react';
import HeaderContainer from '../../containers/Header/HeaderContainer';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HomeContent } from '../HomeContent/HomeContent';
import './page.css';

export interface PageProps {
	user?: {};
	onLogin: () => void;
	onLogout: () => void;
	onCreateAccount: () => void;
	pageType: string;
}

export const Page: React.FC<PageProps> = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount,
	pageType
}) => (
	<div className="page">
		<HeaderContainer />
		{pageType === 'Home' ? <HomeContent /> : <div>PAGE NOT FOUND</div>}
		<Footer />
	</div>
);
