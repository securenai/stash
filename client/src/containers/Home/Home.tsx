import React from 'react';
import { Page } from '../../components/Page/Page';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div>
			<Page onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
		</div>
	);
};

export default Home;
