import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MarsWeather } from "./app";

export const TestAppBasic = () => {
  return (
    <MemoryRouter>
      <MarsWeather />
    </MemoryRouter>
  );
};
