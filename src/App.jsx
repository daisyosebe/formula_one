import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import PortfolioPage from "./pages/portfolio/Portfolio.jsx";
import ContactPage from "./pages/contact/Contact.jsx";
import ResumePage from "./pages/resume/Resume.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="view">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
};