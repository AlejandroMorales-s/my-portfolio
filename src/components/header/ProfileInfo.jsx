import React from 'react';
import profilePhoto from '../../assets/headerPhoto.png';

export default function ProfileInfo() {
    return (
        <div className='header-info-container'>
            <h2>Alejandro Morales</h2>
            <div className='header-profile-photo-container'>
                <img src={profilePhoto} alt="" />
            </div>
            <p className='job-title'>React Developer</p>
        </div>

    )
}
