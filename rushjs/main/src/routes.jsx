import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';

// Lazy loaded sub-applications
const About = React.lazy(() => import('about/App'));

const Routes = () => {
  return (
    <>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/about/'>
        <About />
      </Route>
    </>
  );
};

export default Routes;
