import React from 'react';
import HeaderMessage from './HeaderMessage';
import Links from './Links';
import ProfileInfo from './ProfileInfo';

export default function Header() {
    return (
        <header className='header-container'>
            <div className='header container relative'>
                <ProfileInfo/>
                <div className='header-message-container'>
                    <Links/>
                    <HeaderMessage/>
                </div>
            </div>
        </header>
    )
}
