import React, { useEffect, useState } from "react";
import LiquidEther from '../components/LiquidEther';

// Typing animation with random errors
const TYPING_TEXT = "Loading Shazzz Web";
const SYMBOLS = "!@#$%^&*()_+-=~[]{}|;:,.<>?/ZXCVBNMASDFGHJKLQWERTYUIOP".split("");

const RevealText: React.FC = () => {
  const [display, setDisplay] = useState(Array(TYPING_TEXT.length).fill(""));
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const duration = 4000; // ms
    const steps = TYPING_TEXT.length;
    const intervalTime = duration / steps;

    // Reveal letters one by one at equal intervals
    let currentRevealed = 0;
    const revealInterval = setInterval(() => {
      currentRevealed++;
      setRevealed(currentRevealed);
      if (currentRevealed >= steps) {
        clearInterval(revealInterval);
      }
    }, intervalTime);

    return () => {
      clearInterval(revealInterval);
    };
  }, []);

  useEffect(() => {
    // Shuffle symbols much faster (every 20ms)
    const shuffleInterval = setInterval(() => {
      setDisplay(prev =>
        prev.map((char, i) =>
          i < revealed ? TYPING_TEXT[i] : SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        )
      );
    }, 20);
    return () => clearInterval(shuffleInterval);
  }, [revealed]);

  return (
    <span className="text-3xl font-bold text-white drop-shadow-lg font-mono tracking-widest">
      {display.join("")}
    </span>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <RevealText />
      </div>
      <LiquidEther
        colors={[ '#5b048a', '#a330ba', '#dfa2e3' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
};

export default Loading;