import React, {useState} from 'react';
import {AiOutlineDownload} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);

    //* Show/Hide Navbar on scroll
    let currentPosition  = window.pageYOffset;

    window.onscroll = () => {
        let scrolling = window.pageYOffset;
        currentPosition >= scrolling ? setShowNavbar(true) : setShowNavbar(false);
        currentPosition = scrolling;
    };
    return (
        <div className={`${showNavbar ? 'show-navbar' : 'hide-navbar'} navbar-container`}>
            <div className='container navbar'>
                <Link to='/'>
                    <h1>Alejandro Morales</h1>
                </Link>
                <nav>
                    <ul>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li>
                            <button>
                                CV
                                <AiOutlineDownload className='download-icon'/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
