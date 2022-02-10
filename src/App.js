import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
