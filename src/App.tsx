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
    <div className={`min-h-screen bg-black transition-opacity duration-900 ease-in-out ${
      fadeInHome ? 'opacity-100' : 'opacity-0'
    }`}>
      <Navbar />
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
  )
}

export default App