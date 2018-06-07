import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<BrowserRouter><App1 /></BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
