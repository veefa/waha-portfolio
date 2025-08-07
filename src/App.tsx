import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
