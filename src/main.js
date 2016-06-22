import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.js';

require('./main.css');

let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Hello />, app);