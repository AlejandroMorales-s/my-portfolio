import React from 'react';
import About from '../components/home/about/About';
import Header from '../components/home/header/Header';
import Projects from '../components/home/projects/Projects';
import Skills from '../components/home/skills/Skills';

export default function Home() {
    return (
        <>
            <Header/>
            <Skills/>
            <About/>
            <Projects/>
        </>
    )
}
