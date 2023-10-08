import React from "react";
import { MemoryRouter } from "react-router-dom";
import { About } from "./app";

export const TestAppBasic = () => {
  return (
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
};
