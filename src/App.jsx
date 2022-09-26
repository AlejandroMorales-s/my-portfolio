import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import { useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa'
import { useEffect } from 'react';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  let location = useLocation()

  const [showBtn, setShowBtn] = useState(false)
  
  window.addEventListener('scroll', () => window.scrollY >= window.innerHeight / 2 ? setShowBtn(true) : setShowBtn(false));

  const scroll = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
  };

  useEffect(() => {
    scroll() 
  }, [location])
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/project-details/:id" element={<ProjectDetails/>} />
      </Routes>
      {showBtn && 
        <FaArrowCircleUp onClick={scroll} className='go-to-top-button' />
      }
    </>
  )
}

export default App
