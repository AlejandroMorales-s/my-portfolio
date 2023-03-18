import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

export default function Links() {
  return (
    <div className='header-icons-container'>
      <a
        href='https://github.com/AlejandroMorales-s'
        target='_blank'
        rel='noreferrer'
      >
        <AiOutlineGithub className='header-icon' />
      </a>
      <a
        href='https://www.instagram.com/alejandro_m_e/'
        target='_blank'
        rel='noreferrer'
      >
        <AiOutlineInstagram className='header-icon' />
      </a>
      <a
        href='https://www.linkedin.com/in/alejandromorales-dev/'
        target='_blank'
        rel='noreferrer'
      >
        <AiOutlineLinkedin className='header-icon' />
      </a>
    </div>
  );
}
