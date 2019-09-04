import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
	console.log('Development mode detected, open webpack dev server');
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
