import { useState, useEffect } from 'react'
import Loading from './pages/Loading'
import { Navbar } from './components/ui/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Experinces from './pages/Experinces'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/ui/Footer'
import LightRays from './components/LightRays'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeInHome, setFadeInHome] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setFadeInHome(true);
        }, 50);
      }, 900);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPageContentOpacity = (pageIndex: number) => {
    const pageHeight = window.innerHeight;
    const pageStart = pageIndex * pageHeight;
    const fadeDistance = 140;
    const fadeOffset = 160; // start fading a bit earlier
    
    // Current page position relative to viewport
    const currentPageTop = pageStart - scrollY;
    
    // If page is moving up towards navbar, but start fade later
    if (currentPageTop < -fadeOffset && currentPageTop > -(fadeDistance + fadeOffset)) {
      return Math.max(0, 1 + (currentPageTop + fadeOffset) / fadeDistance);
    }
    
    // If page is fully above viewport
    if (currentPageTop <= -(fadeDistance + fadeOffset)) {
      return 0;
    }
    
    return 1;
  };

  if (loading) {
    return (
      <div className={`w-full h-screen transition-opacity duration-900 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative transition-opacity duration-900 ease-in-out ${
      fadeInHome ? 'opacity-100' : 'opacity-0'
    }`} style={{ backgroundColor: 'rgb(10, 10, 10)' }}>
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
        <LightRays 
          raysColor="#480385"
          raysSpeed={1.1}
          lightSpread={0.25}
          rayLength={5.0}
          fadeDistance={1}
          saturation={2}
          mouseInfluence={0.5}
          noiseAmount={0.28}
          distortion={0}
        />
      </div>
      <Navbar />
      <div className="relative z-10">
        <main className="pt-16">
          <div style={{ opacity: getPageContentOpacity(0), transition: 'opacity 0.3s ease' }}>
            <Home />
          </div>
          <div style={{ opacity: getPageContentOpacity(1), transition: 'opacity 0.3s ease' }}>
            <About />
          </div>
          <div style={{ opacity: getPageContentOpacity(2), transition: 'opacity 0.3s ease' }}>
            <Services />
          </div>
          <div style={{ opacity: getPageContentOpacity(3), transition: 'opacity 0.3s ease' }}>
            <Experinces />
          </div>
          <div style={{ opacity: getPageContentOpacity(4), transition: 'opacity 0.3s ease' }}>
            <Projects />
          </div>
          <div style={{ opacity: getPageContentOpacity(5), transition: 'opacity 0.3s ease' }}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App