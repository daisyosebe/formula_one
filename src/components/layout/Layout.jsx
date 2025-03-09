import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

export default function Layout({ title, navbarPosition, children }) {
  return (
    <div className="layout">
      <Header title={title} navbarPosition={navbarPosition} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
