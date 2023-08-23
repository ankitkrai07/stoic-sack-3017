import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import Signup from "./Signup";
import Login from "./Login";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h2>404 Page not found!</h2>} />
    </Routes>
  );
};
