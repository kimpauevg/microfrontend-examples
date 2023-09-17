import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AboutApp } from './app';

export const AboutBasic = () => {
  return (
    <MemoryRouter>
      <AboutApp />
    </MemoryRouter>
  );
};
