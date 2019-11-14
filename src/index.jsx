import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './main.scss';
import { HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

if (process.env.NODE_ENV !== 'production') {
	console.log('Development mode detected, open webpack dev server');
}

ReactDOM.render(
	<Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''} history={history}>
		<App />
	</Router>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
