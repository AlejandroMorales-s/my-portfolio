import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export default function Links() {
    return (
        <div className='header-icons-container'>
            <a href="https://github.com/AlejandroMorales-s" target='_blank'>
                <AiOutlineGithub className='header-icon'/>
            </a>
            <a href="https://www.instagram.com/alejandro_m_e/" target='_blank'>
                <AiOutlineInstagram className='header-icon'/>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-morales-0b7513200/" target='_blank'>
                <AiOutlineLinkedin className='header-icon'/>
            </a>
        </div>
    )
}
