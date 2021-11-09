import React from 'react';
import HeaderContainer from '../../../containers/Header/HeaderContainer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HomeContent } from '../HomeContent/HomeContent';
import Safety from '../Safety/Safety';
import Support from '../Support/Support';
import './page.css';

export interface PageProps {
	pageType: string;
}

export const Page: React.FC<PageProps> = ({ pageType }) => {
	const renderPage = () => {
		if (pageType === 'Home') {
			return <HomeContent />;
		} else if (pageType === 'About') {
			return <About />;
		} else if (pageType === 'Contact') {
			return <Contact />;
		} else if (pageType === 'Support') {
			return <Support />;
		} else if (pageType === 'Safety') {
			return <Safety />;
		} else {
			return <div>PAGE NOT FOUND</div>;
		}
	};

	return (
		<div className="page">
			<HeaderContainer />
			<div className="homeContent">{renderPage()}</div>
			<Footer />
		</div>
	);
};
