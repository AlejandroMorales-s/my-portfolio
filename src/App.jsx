import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import { FaArrowCircleUp } from "react-icons/fa";

function App() {
  const location = useLocation();

  const [showBtn, setShowBtn] = useState(false);

  window.addEventListener("scroll", () =>
    window.scrollY >= window.innerHeight / 2
      ? setShowBtn(true)
      : setShowBtn(false)
  );

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scroll();
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {showBtn && (
        <FaArrowCircleUp onClick={scroll} className="go-to-top-button" />
      )}
    </>
  );
}

export default App;
