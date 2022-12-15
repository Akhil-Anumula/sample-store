import React from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
