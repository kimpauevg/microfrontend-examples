import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DescriptionApp } from './app';

export const DescriptionBasic = () => {
  return (
    <MemoryRouter>
      <DescriptionApp />
    </MemoryRouter>
  );
};
