import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h2>404 Page not found!</h2>} />
    </Routes>
  );
};
