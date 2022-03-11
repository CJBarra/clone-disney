import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
