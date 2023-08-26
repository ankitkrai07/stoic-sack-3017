import React from "react";
import { MainRoutes } from "./Pages/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FinalChat } from "./chatboat/FinalChatBoat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <FinalChat />
      <Footer />
    </div>
  );
}

export default App;
