import React, {useEffect} from 'react'
import About from './pages/About'
import Book from './pages/Book'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Location from './pages/Location'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Big Blue Hotel | Home",
      "/about": "Big Blue Hotel | About",
      "/book": "Big Blue Hotel | Book",
      "/gallery": "Big Blue Hotel | Gallery",
      "/location": "Big Blue Hotel | Location",
    };
    document.title = pageTitles[location.pathname] || "Big Blue Hotel"
  }, [location])
}


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <TitleUpdater />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/book' element={<Book />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/location' element={<Location />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App