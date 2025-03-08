import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import AstonMartinPage from "./pages/astonmartin/AstonMartin.jsx";
import FerrariPage from "./pages/ferrari/Ferrari.jsx";
import McLarenPage from "./pages/mclaren/McLaren.jsx";
import MercedesPage from "./pages/mercedes/Mercedes.jsx";
import RedBullPage from "./pages/redbull/RedBull.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="view">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AstonMartin" element={<AstonMartinPage />} />
          <Route path="/Ferrari" element={<FerrariPage />} />
          <Route path="/McLaren" element={<McLarenPage />} />
          <Route path="/Mercedes" element={<MercedesPage />} />
          <Route path="/RedBull" element={<RedBullPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
};