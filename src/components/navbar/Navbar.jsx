import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import PopUpWrapper from "../common/PopUpWrapper";
import Form from "../home/contact/Form";

const HOME_PATH = "/";

export default function Navbar() {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [openContactForm, setOpenContactForm] = useState(false);

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

  const handleOpenContactForm = () => setOpenContactForm(true);
  const handleCloseContactForm = () => setOpenContactForm(false);

  return (
    <div
      className={`${
        showNavbar ? "show-navbar" : "hide-navbar"
      } navbar-container`}
    >
      <div className="container navbar">
        <Link to={HOME_PATH}>
          <h1 className="logo">Alejandro Morales</h1>
        </Link>
        <nav className="desktop-menu">
          {location.pathname !== HOME_PATH ? (
            <ul>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "nav-active nav-button" : "nav-button"
                  }
                  href="#projects"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/certificates"
                  className={({ isActive }) =>
                    isActive ? "nav-active nav-button" : "nav-button"
                  }
                  href="#certificates"
                >
                  Certificates
                </NavLink>
              </li>
              <li onClick={handleOpenContactForm}>Contact</li>
            </ul>
          ) : (
            <ul>
              <li>
                <a
                  onClick={(e) => scroll(e)}
                  className="nav-button"
                  href="#professional-experience"
                >
                  Professional Experience
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scroll(e)}
                  className="nav-button"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scroll(e)}
                  className="nav-button"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scroll(e)}
                  className="nav-button"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scroll(e)}
                  className="nav-button"
                  href="#certificates"
                >
                  Certificates
                </a>
              </li>
              <li onClick={handleOpenContactForm}>Contact</li>
            </ul>
          )}
        </nav>
        <MobileNavbar showNavbar={showNavbar} />
      </div>

      <PopUpWrapper isOpen={openContactForm} onClose={handleCloseContactForm}>
        <Form onClose={handleCloseContactForm} />
      </PopUpWrapper>
    </div>
  );
}
