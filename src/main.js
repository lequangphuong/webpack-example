import React from 'react';
import ReactDOM from 'react-dom';

require('./main.css');

let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<div className="main"> main </div>, app);