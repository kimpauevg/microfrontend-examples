import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DescriptionApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <DescriptionApp />
  </BrowserRouter>
), document.getElementById('root'));

