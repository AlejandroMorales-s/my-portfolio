import React from 'react';
import profilePhoto from '../assets/headerPhoto.png';

export default function ProfilePhoto() {
    return (
        <div className='header-profile-photo-container'>
            <img src={profilePhoto} alt="" />
        </div>
    )
}
