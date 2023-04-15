import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Events from './pages/Events';
import CurrentTeam from './pages/CurrentTeam';
import PastTeam from './pages/PastTeam';
import Clubs from './pages/Clubs';
import PlacementMaterials from './pages/PlacementMaterials';
import PlacementTalksVideos from './pages/PlacementTalksVideos';
import Blogs from './pages/Blogs';
import EventsDetails from './pages/EventsDetails';
import BlogsDetails from './pages/BlogsDetails';
import PrepMat from './pages/PrepMat';
import Material from './pages/Material';

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
        <Route path="/team" element={<CurrentTeam />} />     
        <Route path="/team/past-team" element={<PastTeam />} />     
        <Route path="/material" element={<Material />} />     
        <Route path="/clubs" element={<Clubs />} />     
        <Route path="/material/placement-talks" element={<PlacementTalksVideos />} />     
        <Route path="/material/blogs" element={<Blogs />} />  
        <Route path="/events/:EventName" element={<EventsDetails />} />    
        <Route path="/material/blogs/:BlogTitle" element={<BlogsDetails />} />   
        <Route path="/material/prep-mat" element={<PrepMat />} />   
        </Routes>
      <Footer />
    </Router>
  )
}

export default App