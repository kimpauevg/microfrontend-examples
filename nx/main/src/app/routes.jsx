import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import HomePage from './components/HomePage';

// Lazy loaded sub-applications
const About = React.lazy(() => import('about/Module'));

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
