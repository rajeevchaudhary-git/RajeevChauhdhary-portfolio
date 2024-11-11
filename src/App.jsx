import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You must import the AOS CSS file
import Banner from './components/Banner'
import Aboutme from './components/Aboutme'
import Services from './components/Services'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import Patners from './components/Patners'
import Blogs from './components/Blogs'
import Conatctus from './components/Conatctus'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
   <>
    {/* <Header/> */}
    <Banner/>
    <Aboutme/>
    <Services/>
    <Resume/>
    <Portfolio/>
    <Testimonials/>
    {/* <Patners/> */}
    {/* <Blogs/> */}
    <Conatctus/>
    <Footer/>

   </>
  )
}

export default App
