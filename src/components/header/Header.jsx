import React from 'react';
import Links from './Links';
import ProfileInfo from './ProfileInfo';

export default function Header() {
    return (
        <header className='header-container'>
            <div className='header container relative'>
                <ProfileInfo/>
                <Links/>
            </div>
        </header>
    )
}
