import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import Inventarie from './pages/Inventarie';
import './Navbar.css';
//react-router-dom



function App() {
  return (
    <HashRouter>
      <div style={{display:'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/contact">Contact</Link>
          </li>
          <li>
            <Link to = "/projects">Projects</Link>
          </li>
          <li>
            <Link to = "/inventarie">Inventarie</Link>
          </li>
        </ul>
      </nav>
      {/** Konfiguration av routingen */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/inventarie' element={<Inventarie/>}/>
      </Routes>
      <Footer/>
      </div>
  </HashRouter>
  );
}

export default App;
