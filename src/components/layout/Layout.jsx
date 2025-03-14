import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import astonMartinLogo from "../../assets/logo/aston.png"
import { Outlet, useLocation } from "react-router-dom";

//Defines settings for each page

const pageSettings = {
  "/astonmartin": {
    title: "Aston Martin",
     pageLogo:astonMartinLogo, 
     navbarPosition: "top", 
     touchImage: true,
     theme: "aston-theme"
  },

  "/": {
     title: "Formula One", 
     pageLogo: null, 
     navbarPosition: "bottom",
     touchImage: false, 
     theme:"home-theme"
  }, // Adjust home settings

};

export default function Layout({children}){ 
  
  const location = useLocation();
  const {
    title = "Default Title",
    navbarPosition = "top",
    pageLogo = null,
    touchImage = false,
    theme = ""
  } = pageSettings[location.pathname] || {};

  // title, navbarPosition, children, theme}) {   console.log("Theme applied:", theme);  // Checks if theme is being applied for each page 

  return (
    <div className= {`layout ${theme}`}> {/*Apply theme as a class*/}
      { <Header 
      title={title} 
      navbarPosition={navbarPosition} 
      pageLogo= {pageLogo} 
      touchImage={touchImage} /> }
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
