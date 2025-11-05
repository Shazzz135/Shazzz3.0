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
      {/* Fixed background light rays */}
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 1 
      }}>
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
      
      {/* Fixed navbar at top */}
      <Navbar />
      
      {/* Main content with proper spacing */}
      <div className="relative" style={{ zIndex: 10 }}>
        <main>
          <div className="fade-out-in">
            <Home />
          </div>
          <div className="fade-out-in">
            <About />
          </div>
          <div className="fade-out-in">
            <Services />
          </div>
          <div className="fade-out-in">
            <Experinces />
          </div>
          <div className="fade-out-in">
            <Projects />
          </div>
          <div className="fade-out-in">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App