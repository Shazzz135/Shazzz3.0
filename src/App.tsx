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
    }`} style={{ backgroundColor: '#18181b' }}>
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
          <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <Navbar />
      <div className="relative z-10">
        <main className="pt-16">
          <Home />
          <About />
          <Services />
          <Experinces />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App