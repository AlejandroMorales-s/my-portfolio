import React from 'react';
import {FaReact, FaSass, FaHtml5, FaGitAlt} from 'react-icons/fa';
import {SiTailwindcss, SiJavascript} from 'react-icons/si';
import {IoLogoCss3, IoLogoNodejs} from 'react-icons/io';

export default function Skills() {
    return (
        <div id='skills' className='container skills'>
            <h2 className='h2'>Skills</h2>
            <div className='skills-container'>
                <div className='skill'>
                    <FaReact className='react skill-icon'/>
                    <p>React</p>
                </div>
                <div className='skill'>
                    <FaSass className='sass skill-icon'/>
                    <p>Sass</p>
                </div>
                <div className='skill'>
                    <FaHtml5 className='html skill-icon'/>
                    <p>HTML 5</p>
                </div>
                <div className='skill'>
                    <SiTailwindcss className='tailwind skill-icon'/>
                    <p>Tailwind</p>
                </div>
                <div className='skill'>
                    <SiJavascript className='skill-icon js'/>
                    <p>JavaScript</p>
                </div>
                <div className='skill'>
                    <IoLogoCss3 className='skill-icon css'/>
                    <p>CSS</p>
                </div>
                <div className='skill'>
                    <FaGitAlt className='skill-icon git'/>
                    <p>Git</p>
                </div>
                <div className='skill'>
                    <IoLogoNodejs className='skill-icon node'/>
                    <p>Node JS</p>
                </div>
            </div>
        </div>
    )
}
