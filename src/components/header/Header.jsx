import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

// Nav component inside Header
function Nav() {
  return (
    <nav>
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
    </nav>
  );
}

// Header component that includes title and dynamic Navbar position
export default function Header({ title, navbarPosition }) {
  return (
    <header className="headerBox">
      {navbarPosition === "top" && <Nav />} {/* Show nav above title if position is top */}
      <h1 className="headerTitle">{title}</h1>
      {navbarPosition === "bottom" && <Nav />} {/* Show nav below title if position is bottom */}
    </header>
  );
}
