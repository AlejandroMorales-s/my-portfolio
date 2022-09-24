import { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import {AiOutlineDownload} from 'react-icons/ai';

export default function MobileNavbar() {
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
            <nav className={`mobile-nav ${showNav ? 'show-item' : 'hide-item'}`}>
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
        </div>
    )
}
