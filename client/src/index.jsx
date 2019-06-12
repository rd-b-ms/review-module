import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';

var path = window.location.pathname;

ReactDOM.render(<App path={path} />, document.getElementById('app'));
