import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage/Homepage";
import AboutPage from "./Pages/About/AboutPage";

import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Homepage />} path="/ev-generator" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
