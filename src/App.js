import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Events from './pages/Events';
import PlacementMaterials from './pages/PlacementMaterials';

const App = () => {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />     
        <Route path="/material" element={<PlacementMaterials />} />     
        </Routes>
      <Footer />
    </Router>
  )
}

export default App