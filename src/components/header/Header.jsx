import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/logo/f1.jpg"
import "./Header.css";


// Nav component inside Header
function Nav() {
  return (
    <nav className="navContainer">
            <img src={logoNav} alt="F1 Logo" className="navLogo" /> {/* Nav logo */}

      <NavLink
        to="/"
        style={({ isActive }) => {
          return isActive
            ? {
                color: "var(--blue)",
                filter:
                  "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))",
              }
              : {};
            }}
        className="navElement"
        >
        Home
      </NavLink>
          <NavLink
            to="/astonmartin"
            style={({ isActive }) => {
              return isActive
              ? {
                color: "var(--blue)",
                filter:
                "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))",
              }
              : {};
            }}
            className="navElement"
            >
            Aston Martin
          </NavLink>
      <NavLink
        to="/redbull"
        style={({ isActive }) => {
          return isActive
          ? {
            color: "var(--blue)",
            filter:
            "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))",
          }
            : {};
        }}
        className="navElement"
        >
        Red Bull
      </NavLink>

      <NavLink
        to="/mclaren"
        style={({ isActive }) => {
          return isActive
          ? {
            color: "var(--blue)",
            filter:
            "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))",
          }
            : {};
        }}
        className="navElement"
        >
        McLaren
      </NavLink>

      <NavLink
        to="/ferrari"
        style={({ isActive }) => {
          return isActive
          ? {
            color: "var(--blue)",
            filter:
            "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))",
          }
          : {};
        }}
        className="navElement"
        
        >
          
        Ferrari
      </NavLink>

      <NavLink
        to="/mercedes"
        style={({ isActive }) => {
          return isActive
          ? {
            color: "var(--blue)",
            filter:
            "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))",
          }
          : {};
        }}
        className="navElement"
        >
        Mercedes
      </NavLink>

    </nav>
  );
}


// Header component that includes title and dynamic Navbar position
export default function Header({ title, navbarPosition, pageLogo, touchImage }) {
  return (

    <div className="headerWrapper">

      {navbarPosition === "top" && <Nav />} {/* Show nav above title if position is top */}
    <header className={`headerBox ${touchImage ? "headerTouchImage" : ""}`}>

      <div className="headerContent">
        {pageLogo && <img src={pageLogo} alt={`${title} Logo`} className="headerLogo" />} {/* Page-specific logo */}
        <h1 className="headerTitle">{title}</h1>
      </div>

    </header>
      {navbarPosition === "bottom" && <Nav />} {/* Show nav below title if position is bottom */}
    </div>

  );
}
