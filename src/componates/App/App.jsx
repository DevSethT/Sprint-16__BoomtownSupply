import Home from "../../Pages/Home/Home";
import JuicePage from "../../Pages/JuicePage/JuicePage";
import LocationsPage from "../../Pages/LocationsPage/LocationsPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/juice" element={<JuicePage />} />
      </Routes>
    </>
  );
}

export default App;
