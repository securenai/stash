import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import App from './containers/App/App';
import './index.scss';

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.querySelector('#root')
);
