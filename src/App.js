import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./Pages/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
