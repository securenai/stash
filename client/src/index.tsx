import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.scss';

ReactDOM.render(
	<div>
		<div>
			<h1>stack</h1>
			{/* <Header text={'hello'} /> */}
		</div>
	</div>,
	document.querySelector('#root')
);
