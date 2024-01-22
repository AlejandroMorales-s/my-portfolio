import React from "react";
import DocumentTitle from "react-document-title";
import About from "../components/home/about/About";
import Certificates from "../components/home/certificates/Certificates";
import Contact from "../components/home/contact/Contact";
import Header from "../components/home/header/Header";
import Projects from "../components/home/projects/Projects";
import Skills from "../components/home/skills/Skills";
import ProfessionalExperience from "../components/home/professional-experience";

export default function Home() {
  return (
    <>
      <DocumentTitle title="Alejandro Morales" />
      <Header />
      <ProfessionalExperience />
      <Skills />
      <About />
      <Projects />
      <Certificates />
      {/* <Contact /> */}
    </>
  );
}
