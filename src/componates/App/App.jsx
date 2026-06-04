import Home from "../../Pages/Home/Home";
import JuicePage from "../../Pages/JuicePage/JuicePage";
import LocationsPage from "../../Pages/LocationsPage/LocationsPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/juice" element={<JuicePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
