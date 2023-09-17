import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CoreApp } from './app';

export const CoreBasic = () => {
  return (
    <MemoryRouter>
      <CoreApp />
    </MemoryRouter>
  );
};
