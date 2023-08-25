import React from "react";
import { MainRoutes } from "./Pages/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Faq } from "./Pages/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      
      <Footer />
    </div>
  );
}

export default App;
