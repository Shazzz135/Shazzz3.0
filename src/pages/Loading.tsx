import React, { useEffect, useState } from "react";

// Typing animation with random errors
const TYPING_TEXT = "Loading Shazzz Web";
const SYMBOLS = "!@#$%^&*()_+-=~[]{}|;:,.<>?/ZXCVBNMASDFGHJKLQWERTYUIOP".split("");

const RevealText: React.FC = () => {
  const [display, setDisplay] = useState(Array(TYPING_TEXT.length).fill(""));
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const duration = 2200; // ms (2.2s)
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
        prev.map((_, i) =>
          i < revealed ? TYPING_TEXT[i] : SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        )
      );
    }, 20);
    return () => clearInterval(shuffleInterval);
  }, [revealed]);

  return (
    <span
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-mono tracking-widest"
      style={{
        // Extra small screens
        fontSize: 'clamp(1.2rem, 7vw, 2.5rem)',
        wordBreak: 'break-word',
        textAlign: 'center',
        width: '100%',
        display: 'block'
      }}
    >
      {display.join("")}
    </span>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center" style={{ background: 'transparent' }}>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <RevealText />
      </div>
      {/* Background handled globally by LiquidEther in App.tsx */}
    </div>
  );
};

export default Loading;