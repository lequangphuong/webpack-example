import React from 'react';
import ReactDOM from 'react-dom';

require('./hello.css');

let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<div className="hello"> hello </div>, app);