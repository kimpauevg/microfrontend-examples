/* eslint import/no-unresolved: [2, { ignore: ['mars_weather/AboutComponent'] }] */
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import HomePage from './components/HomePage';

// Lazy loaded sub-applications
// @ts-ignore-next-line @bit-ignore
const About = React.lazy(() => import('mars_weather/AboutComponent'));

const Routes = () => {
  return (
    <>
      <ReactRoutes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/about/' element={<About/>} />
      </ReactRoutes>
    </>
  );
};

export default Routes;
