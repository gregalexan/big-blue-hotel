import React, { useState, useEffect } from 'react'
import FAQ from '../components/FAQ'
import Location from '../components/Location';
import Rewards from '../components/Rewards'
import Services from '../components/Services';
import SomePhotos from '../components/SomePhotos';
import Rooms from '../components/Rooms';
import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';

import { useLocation } from 'react-router-dom';


function Home() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location])
  
  return (
    <div>
      <Hero />
      <AboutUs />
      <Rooms />
      <SomePhotos />      
      <Services />
      <Rewards />
      <Location />
      <FAQ />
    </div>
  )
}

export default Home