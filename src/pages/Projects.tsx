import React, { useState, useRef, useEffect } from "react";
import shazzz3Img from "../images/shazzz3.png";
import workwiseImg from "../images/workwise.png";
import tutorspotImg from "../images/tutorspot.png";
import robImg from "../images/rob.png";
import bjImg from "../images/bj.png";
import wordleExtImg from "../images/wordle_ext.png"; // <- NEW import

const PROJECTS = [
  {
    title: "Shazzz 3.0",
    description: "Shazzz 3.0 is my portfolio website built with React and TypeScript. It showcases my skills, projects, and services with a modern UI, animated backgrounds, and a contact form.",
    image: shazzz3Img
  },
  {
    title: "Workwise",
    description: "Workwise is a tool for keeping track of job applications. I made it quickly to organize my job search and stay on top of upcoming application seasons. It helps you log jobs and track their status.",
    image: workwiseImg,
    link: "https://work-wise-r47g.vercel.app/"
  },
  {
    title: "Tutorspot",
    description: "Tutorspot is a platform for finding and connecting with tutors. Students can search for tutors by subject, view profiles, and book sessions. I built it to make tutoring more accessible and organized. It is also a team project and uses SQL databases and verification tokens for secure user management.",
    image: tutorspotImg
  },
  {
    title: "Red or Black",
    description: "Red or Black is an intuition and memory game that is always randomized. Highscores and coins are saved locally, and you can purchase new backgrounds I personally drew. Made with Swift and published on the App Store with 5000+ downloads.",
    image: robImg,
    link: "https://github.com/Shazzz135/Red-Or-Black"
  },
  {
    title: "Simple Blackjack",
    description: "Simple Blackjack is a blackjack game made in C that displays in the terminal. It features visual cards and special symbols for an engaging experience. Developed as a team project, it demonstrates terminal graphics and collaborative programming.",
    image: bjImg,
    link: "https://github.com/Flapjacck/Simple-BlackJack"
  },
  {
    title: "Wordle Chrome Extension",
    description: "Wordle Chrome Extension is basically what it sounds like — an extension that lets you play the daily Wordle directly in your browser. It's made using HTML, CSS, and JavaScript and packaged with Chrome extension assets (manifest, background/content scripts, etc.).",
    image: wordleExtImg,
    link: "https://github.com/Shazzz135/Wordle_Chrome_Ext"
  }
];

const CARD_WIDTH = 650;
const CARD_HEIGHT = 400;

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  // Use type 'ReturnType<typeof setTimeout> | null' instead of 'NodeJS.Timeout | null'
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 340 : CARD_WIDTH;
  const cardHeight = isMobile ? 400 : CARD_HEIGHT;

  const handleSwap = (nextIdx: number) => {
    setFade(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(nextIdx);
      setFade(true);
    }, 250);
  };

  const prev = () => handleSwap((current - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => handleSwap((current + 1) % PROJECTS.length);

  // Make indices 3, 4 and 5 render in the side-by-side (description-left) layout
  const isSideBySideFormat = current === 3 || current === 4 || current === 5;
  
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-2"
      style={{
        backgroundColor: 'transparent',
        minHeight: isMobile ? 400 : '100vh',
        height: isMobile ? 400 : undefined,
        padding: isMobile ? "0.8rem" : undefined
      }}
    >
      <h1
        className="text-4xl font-bold"
        style={{
          animation: "colorPulse 3s infinite",
          color: "#32004f",
          display: "inline-block",
          fontSize: isMobile ? "2em" : "2.5em",
          marginBottom: isMobile ? "0.5rem" : "0.5rem",
          paddingTop: isMobile ? "1.2rem" : "1.5rem"
        }}
      >
        Projects
      </h1>
      <div
        className="flex items-center justify-center"
        style={{
          width: cardWidth + 48,
          height: isMobile ? 400 : cardHeight + 80,
          minWidth: cardWidth + 48,
          minHeight: isMobile ? 400 : cardHeight + 80,
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "0.5rem" : undefined,
          marginTop: isMobile ? "2.2rem" : undefined
        }}
      >
        {/* Left Arrow */}
        {!isMobile && (
          <button
            onClick={prev}
            aria-label="Previous Project"
            className="mr-4 group"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: 48, height: 48 }}
          >
            <svg
              width="48"
              height="48"
              fill="none"
              stroke="#dfa2e3"
              strokeWidth={3}
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:scale-125"
            >
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {/* Project Card */}
        <div
          className={`transition-opacity duration-250 ${fade ? "opacity-100" : "opacity-0"}`}
          style={{ width: cardWidth, height: cardHeight }}
        >
          {!isSideBySideFormat ? (
            <div
              className="border border-[#5b048a] rounded-2xl shadow-2xl flex flex-col items-center justify-center transition-all duration-300"
              style={{
                width: cardWidth,
                height: cardHeight,
                minWidth: cardWidth,
                minHeight: cardHeight,
                maxWidth: cardWidth,
                maxHeight: cardHeight,
                boxSizing: "border-box",
                overflow: "hidden",
                padding: isMobile ? "0.2rem" : "0.5rem",
                gap: isMobile ? "0.5rem" : "1.2rem",
                display: "flex"
              }}
            >
              {/* Image */}
              <div
                className="flex w-full items-center justify-center"
                style={{
                  margin: 0,
                  paddingTop: isMobile ? "0.5rem" : "0",
                  paddingBottom: isMobile ? "0.5rem" : "0"
                }}
              >
                {PROJECTS[current].image && (
                  <img
                    src={PROJECTS[current].image}
                    alt={PROJECTS[current].title}
                    className="rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                    style={{
                      width: isMobile ? "98%" : "78%",
                      height: "auto",
                      maxWidth: isMobile ? 320 : 440,
                      maxHeight: isMobile ? 180 : 240,
                      objectFit: "contain",
                      margin: isMobile ? "0 auto" : undefined
                    }}
                  />
                )}
              </div>
              {/* Description */}
              <p
                className="text-base text-white text-center w-full overflow-auto leading-relaxed"
                style={{
                  maxWidth: "98%",
                  maxHeight: isMobile ? "180px" : "120px",
                  fontSize: isMobile ? "0.78em" : "0.95em",
                  textOverflow: "unset",
                  whiteSpace: "pre-line",
                  paddingLeft: isMobile ? "0.2rem" : "0.5rem",
                  paddingRight: isMobile ? "0.2rem" : "0.5rem",
                  margin: isMobile ? "0.2rem 0" : "0.5rem 0"
                }}
                dangerouslySetInnerHTML={{
                  __html: PROJECTS[current].description.replace(
                    PROJECTS[current].title,
                    (PROJECTS[current].link)
                      ? `<a href="${PROJECTS[current].link}" target="_blank" rel="noopener noreferrer" style="color:#a259e6;font-weight:bold;text-decoration:underline;">${PROJECTS[current].title}</a>`
                      : `<span style="font-weight:bold;color:#a259e6;">${PROJECTS[current].title}</span>`
                  )
                }}
              />
            </div>
          ) : (
            <div
              className="border border-[#5b048a] rounded-2xl shadow-2xl flex flex-row items-center justify-center transition-all duration-300"
              style={{
                width: cardWidth,
                height: cardHeight,
                minWidth: cardWidth,
                minHeight: cardHeight,
                maxWidth: cardWidth,
                maxHeight: cardHeight,
                boxSizing: "border-box",
                overflow: "hidden",
                padding: isMobile ? "0.2rem" : "0.5rem",
                gap: isMobile ? "0.2rem" : "0.3rem",
                display: "flex"
              }}
            >
              {/* Description (left) */}
              <div className="flex flex-col justify-center items-center w-1/2 h-full px-2">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%"
                  }}
                >
                  <p
                    className="text-base text-white text-center w-full overflow-auto leading-relaxed"
                    style={{
                      maxWidth: "98%",
                      maxHeight: "100%",
                      fontSize: isMobile ? "0.68em" : "0.95em",
                      textOverflow: "ellipsis",
                      whiteSpace: "pre-line",
                      margin: 0,
                      display: "block"
                    }}
                    dangerouslySetInnerHTML={{
                      __html: PROJECTS[current].description.replace(
                        PROJECTS[current].title,
                        (PROJECTS[current].link)
                          ? `<a href="${PROJECTS[current].link}" target="_blank" rel="noopener noreferrer" style="color:#a259e6;font-weight:bold;text-decoration:underline;">${PROJECTS[current].title}</a>`
                          : `<span style="font-weight:bold;color:#a259e6;">${PROJECTS[current].title}</span>`
                      )
                    }}
                  />
                </div>
              </div>
              {/* Image (right) */}
              <div className="flex items-center justify-center w-1/2 h-full">
                <img
                  src={PROJECTS[current].image}
                  alt={PROJECTS[current].title}
                  className="rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                  style={{
                    width: isMobile ? "90%" : "70%",
                    height: "auto",
                    maxWidth: isMobile ? "90%" : "80%",
                    maxHeight: isMobile ? "60%" : "80%",
                    objectFit: "contain",
                    background: "none"
                  }}
                />
              </div>
            </div>
          )}
        </div>
        {/* Right Arrow */}
        {!isMobile && (
          <button
            onClick={next}
            aria-label="Next Project"
            className="ml-4 group"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: 48, height: 48 }}
          >
            <svg
              width="48"
              height="48"
              fill="none"
              stroke="#dfa2e3"
              strokeWidth={3}
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:scale-125"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {/* Arrows below for small screens */}
        {isMobile && (
          <div className="flex w-full justify-center mt-2 gap-8">
            <button
              onClick={prev}
              aria-label="Previous Project"
              className="group"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: 40, height: 40 }}
            >
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#dfa2e3"
                strokeWidth={3}
                viewBox="0 0 24 24"
                className="transition-transform duration-200 group-hover:scale-125"
              >
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next Project"
              className="group"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: 40, height: 40 }}
            >
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#dfa2e3"
                strokeWidth={3}
                viewBox="0 0 24 24"
                className="transition-transform duration-200 group-hover:scale-125"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
      <style>{`
        .transition-opacity {
          transition: opacity 250ms ease;
        }
        @media (max-width: 430px) {
          .text-base { font-size: 0.78em !important; }
          .text-lg { font-size: 1em !important; }
          .text-4xl { font-size: 2em !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
