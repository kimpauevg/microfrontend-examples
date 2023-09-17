import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AboutApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <AboutApp />
  </BrowserRouter>
), document.getElementById('root'));

