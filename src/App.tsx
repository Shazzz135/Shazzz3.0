import { useState, useEffect, useRef } from 'react'
import Loading from './pages/Loading'
import { Navbar } from './components/ui/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/ui/Footer'
import LiquidEther from './components/LiquidEther'

import './App.css'

function App() {
  // overlayVisible: whether the loading overlay element is mounted/shown
  // overlayFading: when true, overlay transitions to hidden (opacity 0)
  // contentVisible: when true, content transitions to visible (opacity 1)
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [overlayFading, setOverlayFading] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  // milliseconds - tweak for delay and fade length
  const LOADING_DELAY = 2500; // show loading for 2.5s
  const FADE_DURATION = 900; // overlay/content fade duration (ms)

  useEffect(() => {
    // start sequence after LOADING_DELAY:
    // 1) trigger overlay fade-out
    // 2) after FADE_DURATION hide overlay and then start content fade-in
    const t1 = window.setTimeout(() => {
      setOverlayFading(true); // start fade-out
      // Wait until overlay fully faded, then remove overlay and then start content fade-in
      const t2 = window.setTimeout(() => {
        setOverlayVisible(false); // remove overlay element after fade completed
        // Start fading in content immediately after overlay is removed
        setContentVisible(true);
      }, FADE_DURATION + 20); // tiny safety margin
      timeoutsRef.current.push(t2);
    }, LOADING_DELAY);
    timeoutsRef.current.push(t1);

    return () => {
      timeoutsRef.current.forEach(id => clearTimeout(id));
      timeoutsRef.current.length = 0;
    };
  }, []);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'rgb(10, 10, 10)' }}>
      {/* Persistent background */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      >
        <LiquidEther
          colors={['#a330ba', '#5b048a', '#dfa2e3']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          dt={0.014}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Navbar: fade in only after contentVisible — keep it outside transforms so fixed works */}
      <div className={`navbar-fade ${contentVisible ? 'visible' : ''}`} style={{ zIndex: 9999 }}>
        <Navbar />
      </div>

      {/* App content (always mounted, but hidden until contentVisible) */}
      <div className={`app-content ${contentVisible ? 'visible' : ''}`} style={{ zIndex: 10 }}>
        <main>
          <div className="fade-out-in"><Home /></div>
          <div className="fade-out-in"><About /></div>
          <div className="fade-out-in"><Services /></div>
          <div className="fade-out-in"><Education /></div>
          <div className="fade-out-in"><Projects /></div>
          <div className="fade-out-in"><Contact /></div>
        </main>
        <Footer />
      </div>

      {/* Loading overlay on top - fades out, then removed */}
      {overlayVisible && (
        <div
          className={`loading-overlay ${overlayFading ? 'fade-out' : 'visible'}`}
          style={{ zIndex: 50 }}
        >
          <Loading />
        </div>
      )}
    </div>
  )
}

export default App