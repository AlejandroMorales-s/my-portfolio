import { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import { useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

export default function MobileNavbar({showNavbar}) {
    const location = useLocation()

    const [showNav, setShowNav] = useState(false)

    //* Smooth scroll
    const scroll = (e) => {
        e.preventDefault();
        const href = e.target.attributes.href.value;
        const section =  document.querySelector(href);
        section.scrollIntoView({behavior: "smooth"});
        setShowNav(false)
    };
    
    return (
        <div className='mobile-menu'>
            <MdMenu onClick={() => setShowNav(!showNav)} className={`mobile-menu-icon ${showNav ? 'icon-active' : 'icon-inactive'}`}/>
            <nav className={`mobile-nav ${showNav && showNavbar ? 'show-item' : 'hide-item'}`}>
                {location.pathname !== "/" ? 
                    <ul>
                        <li>
                            <NavLink 
                                to='/projects' 
                                className={({isActive}) => isActive ? 'nav-active nav-button' : 'nav-button'} 
                                href='#projects'
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/certificates' 
                                className={({isActive}) => isActive ? 'nav-active nav-button' : 'nav-button'} 
                                href='#certificates'
                            >
                                Certificates
                            </NavLink>
                        </li>
                        <li><Link to='/'  href="#contact">Contact</Link></li>
                    </ul>
                :
                    <ul>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#skills'>Skills</a></li>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#about'>About</a></li>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#projects'>Projects</a></li>
                        <li><a onClick={(e) => scroll(e)} className='nav-button' href='#certificates'>Certificates</a></li>
                        <li><a onClick={(e) => scroll(e)} href="#contact">Contact</a></li>
                    </ul>
                }
                </nav>
        </div>
    )
}
