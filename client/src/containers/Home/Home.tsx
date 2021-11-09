import React from 'react';
import { Page } from '../../components/HomePage/Page/Page';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div>
			<Page pageType={'Home'} />
		</div>
	);
};

export default Home;
