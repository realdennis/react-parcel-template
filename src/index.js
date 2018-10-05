import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();

module.hot ? module.hot.accept() : undefined;