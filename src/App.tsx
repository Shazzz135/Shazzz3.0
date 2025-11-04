import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Loading from './pages/Loading'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [fadeInHome, setFadeInHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        setShowHome(true);
        setTimeout(() => {
          setFadeInHome(true);
        }, 50); // slight delay to ensure Home is mounted before fade-in
      }, 900); // matches fade out duration
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black relative">
      {loading && (
        <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}>
          <Loading />
        </div>
      )}
      {showHome && (
        <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
          fadeInHome ? 'opacity-100' : 'opacity-0'
        }`}>
          <Home />
        </div>
      )}
    </div>
  )
}

export default App