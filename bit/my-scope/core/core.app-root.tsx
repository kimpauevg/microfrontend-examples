import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CoreApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <CoreApp />
  </BrowserRouter>
), document.getElementById('root'));

