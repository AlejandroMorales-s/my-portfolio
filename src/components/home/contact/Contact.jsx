import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import Form from "./Form";

export default function Contact() {
  return (
    <div id="contact" className="contact-container container">
      <h2 className="h2">Contact</h2>
      <p>Do you have a project in mind? Lets talk! (:</p>
      <div className="contact-social-media-container">
        <a href="https://www.instagram.com/alejandro_m_e/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="contact-social-media-icon instagram" />
        </a>
        <a href="https://github.com/AlejandroMorales-s" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="contact-social-media-icon github" />
        </a>
        <a href="https://es.fiverr.com/alejandro_me/develop-your-react-app-using-react-and-firebase" target="_blank" rel="noopener noreferrer">
          <SiFiverr className="contact-social-media-icon fiverr" />
        </a>
        <a href="https://www.linkedin.com/in/alejandro-morales-0b7513200/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="contact-social-media-icon linkedin" />
        </a>
      </div>
      <Form />
    </div>
  );
}
