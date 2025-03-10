import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

export default function Layout({ title, navbarPosition, children, theme}) {   console.log("Theme applied:", theme);  // Checks if theme is being applied for each page 

  return (
    <div className= {`layout ${theme}`}> {/*Apply theme as a class*/}
      <Header title={title} navbarPosition={navbarPosition} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
