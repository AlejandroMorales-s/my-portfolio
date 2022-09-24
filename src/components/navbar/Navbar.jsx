import React, {useState} from 'react';
import {AiOutlineDownload} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);

    //* Show/Hide Navbar on scroll
    let currentPosition  = window.pageYOffset;

    window.onscroll = () => {
        let scrolling = window.pageYOffset;
        currentPosition >= scrolling ? setShowNavbar(true) : setShowNavbar(false);
        currentPosition = scrolling;
    };

    //* Smooth scroll
    const scroll = (e) => {
        e.preventDefault();
        const href = e.target.attributes.href.value;
        const section =  document.querySelector(href);
        section.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className={`${showNavbar ? 'show-navbar' : 'hide-navbar'} navbar-container`}>
            <div className='container navbar'>
                <Link to='/'>
                    <h1>Alejandro Morales</h1>
                </Link>
                <nav className='desktop-menu'>
                    <ul>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#skills'>Skills</a></li>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#about'>About</a></li>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#projects'>Projects</a></li>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#certificates'>Certificates</a></li>
                        <li>
                            <button>
                                CV
                                <AiOutlineDownload className='download-icon'/>
                            </button>
                        </li>
                    </ul>
                </nav>
                <MobileNavbar showNavbar={showNavbar}/>
            </div>
        </div>
    )
}
