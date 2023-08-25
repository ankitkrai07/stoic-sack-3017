import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import Calculators from "./Calculators";
import Signup from "./Signup";
import Login from "./Login";
import { Faq } from "./Faq";
import { Student } from "./Student";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/calculators" element={<Calculators />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/students" element={<Student/>} />
      <Route path="/faq" element={<Faq/>}/>
      <Route path="*" element={<h2>404 Page not found!</h2>} />
    </Routes>
  );
};
