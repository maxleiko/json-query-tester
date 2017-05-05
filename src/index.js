import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import localStorage from './util/localStorage';
import './index.css';

const model = localStorage.get('model');
const query = localStorage.get('query')

ReactDOM.render(
	<App model={model} query={query} />, document.getElementById('root'));
