import React from 'react';
import About from '../components/about/About';
import Header from '../components/header/Header';
import Skills from '../components/skills/Skills';

export default function Home() {
    return (
        <>
            <Header/>
            <Skills/>
            <About/>
        </>
    )
}
