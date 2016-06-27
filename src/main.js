import React from 'react';
import ReactDOM from 'react-dom';

import Duck from './Duck.jpg';

require('./main.css');


let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<div className="main"> main <img src={Duck} /> </div>, app);