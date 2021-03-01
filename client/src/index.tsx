import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.scss';
// import './styles/global.css';
// import './styles/new.css';
import { Provider } from 'react-redux';
import store from './appStore/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
