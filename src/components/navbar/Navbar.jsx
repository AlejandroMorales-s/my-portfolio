import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);

  //* Show/Hide Navbar on scroll
  let currentPosition = window.pageYOffset;

  window.onscroll = () => {
    const scrolling = window.pageYOffset;

    if (currentPosition >= scrolling) setShowNavbar(true);
    else setShowNavbar(false);

    currentPosition = scrolling;
  };

  //* Smooth scroll
  const scroll = (e) => {
    e.preventDefault();
    const href = e.target.attributes.href.value;
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${showNavbar ? "show-navbar" : "hide-navbar"} navbar-container`}>
      <div className="container navbar">
        <Link to="/">
          <h1 className="logo">Alejandro Morales</h1>
        </Link>
        <nav className="desktop-menu">
          {location.pathname !== "/"
            ? (
              <ul>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? "nav-active nav-button" : "nav-button")}
                    href="#projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/certificates"
                    className={({ isActive }) => (isActive ? "nav-active nav-button" : "nav-button")}
                    href="#certificates"
                  >
                    Certificates
                  </NavLink>
                </li>
                <li><Link to="/" href="#contact">Contact</Link></li>
              </ul>
            )
            : (
              <ul>
                <li><a onClick={(e) => scroll(e)} className="nav-button" href="#skills">Skills</a></li>
                <li><a onClick={(e) => scroll(e)} className="nav-button" href="#about">About</a></li>
                <li><a onClick={(e) => scroll(e)} className="nav-button" href="#projects">Projects</a></li>
                <li><a onClick={(e) => scroll(e)} className="nav-button" href="#certificates">Certificates</a></li>
                <li><a onClick={(e) => scroll(e)} href="#contact">Contact</a></li>
              </ul>
            )}
        </nav>
        <MobileNavbar showNavbar={showNavbar} />
      </div>
    </div>
  );
}
