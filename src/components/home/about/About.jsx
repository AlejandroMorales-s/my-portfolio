import React from 'react';
import ProfilePhoto from '../../ProfilePhoto';
import { saveAs } from 'file-saver';

export default function About() {
  const downloadPDF = () => {
    fetch('./CV.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'cv.pdf');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div id='about' className='container about'>
      <h2 className='h2'>About</h2>
      <div className='about-container'>
        <ProfilePhoto />
        <div>
          <p>
            I am a front-end developer with a great passion for developing
            interactive and dynamic web applications. I specialize in React and
            have experience developing several personal projects. In addition, I
            have worked on team projects where I have learned a lot and
            contributed my technical skills to achieve a high quality result. I
            like to keep myself updated on the latest trends and technologies in
            the field of web application development to make sure I do my job to
            the best of my ability.
          </p>
          <button onClick={downloadPDF} type='button'>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
