import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';

// Lazy loaded sub-applications
const Blog = React.lazy(() => import('blog/App'));

const Routes = () => {

  return (
    <>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/blog/'>
        <Blog />
      </Route>
    </>
  );
};

export default Routes;
