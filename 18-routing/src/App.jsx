import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contackt.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;