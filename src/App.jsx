import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import AstonMartinPage from "./pages/astonmartin/AstonMartin.jsx";
import FerrariPage from "./pages/ferrari/Ferrari.jsx";
import McLarenPage from "./pages/mclaren/McLaren.jsx";
import MercedesPage from "./pages/mercedes/Mercedes.jsx";
import RedBullPage from "./pages/redbull/RedBull.jsx";
import Layout from "./components/layout/Layout.jsx"; // Import Layout component

export default function App() {
  return (
<BrowserRouter basename="/formula_one">
<Routes>
        <Route
          path="/"
          element={
            <Layout navbarPosition="bottom" title="Formula One" theme="home">
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/AstonMartin"
          element={
            <Layout navbarPosition="top" title="Aston Martin" theme="astonmartin">
              <AstonMartinPage />
            </Layout>
          }
        />
        <Route
          path="/Ferrari"
          element={
            <Layout navbarPosition="top" title="Ferrari" theme="ferrari">
              <FerrariPage />
            </Layout>
          }
        />
        <Route
          path="/McLaren"
          element={
            <Layout navbarPosition="top" title="McLaren" theme="mclaren">
              <McLarenPage />
            </Layout>
          }
        />
        <Route
          path="/Mercedes"
          element={
            <Layout navbarPosition="top" title="Mercedes" theme="mercedes">
              <MercedesPage />
            </Layout>
          }
        />
        <Route
          path="/RedBull"
          element={
            <Layout navbarPosition="top" title="Red Bull" theme="redbull">
              <RedBullPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
