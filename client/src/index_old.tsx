import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
	<h1>
		<div className="main_div">
			<div className="main_div_title">
				react-typescript-webpack5-starterpack
			</div>
			<Header text={'this is header'} />
			<Body />
			<Footer />
		</div>
	</h1>,
	document.querySelector('#root')
);
