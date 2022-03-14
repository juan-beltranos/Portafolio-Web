import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/layout/Header';
import { About } from './pages/About';
import { Briefcase } from './pages/Briefcase';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Services } from './pages/Services';

export const PortafolioApp = () => {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/briefcase" element={<Briefcase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
