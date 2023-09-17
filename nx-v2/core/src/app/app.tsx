import * as React from 'react';
import { loadRemoteModule } from '@nx-v2/load-remote-module';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const About = React.lazy(() => loadRemoteModule('About', './Module'));

const Description = React.lazy(() => loadRemoteModule('Description', './Module'));


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/description">Description</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="core" />} />

        <Route path="/about" element={<About />} />

        <Route path="/description" element={<Description />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
