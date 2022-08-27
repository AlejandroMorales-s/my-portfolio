import React from 'react';
import {FaReact, FaSass, FaHtml5, FaGitAlt} from 'react-icons/fa';
import {SiTailwindcss, SiJavascript} from 'react-icons/si';
import {IoLogoCss3, IoLogoNodejs} from 'react-icons/io';

export default function Skills() {

    const skills = [
        {
            name: 'React',
            icon: <FaReact className='skill-icon react'/>,
        },
        {
            name: 'Sass',
            icon: <FaSass className='skill-icon sass'/>,
        },
        {
            name: 'HTML 5',
            icon: <FaHtml5 className='skill-icon html'/>,
        },
        {
            name: 'Tailwind',
            icon: <SiTailwindcss className='skill-icon tailwind'/>,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript className='skill-icon js'/>,
        },
        {
            name: 'CSS 3',
            icon: <IoLogoCss3 className='skill-icon css'/>,
        },
        {
            name: 'Git',
            icon: <FaGitAlt className='skill-icon git'/>,
        },
        {
            name: 'Node JS',
            icon: <IoLogoNodejs className='skill-icon node'/>,
        }
    ];

    return (
        <div id='skills' className='container skills'>
            <h2 className='h2'>Skills</h2>
            <div className='skills-container'>
                {skills.map(skill => {
                    return <div key={skill.name} className='skill'>
                        {skill.icon} 
                        <p>{skill.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
