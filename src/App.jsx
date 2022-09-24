import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';import Certificates from './pages/Certificates';
;

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates/>} />
      </Routes>
    </>
  )
}

export default App
