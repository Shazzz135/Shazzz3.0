import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  // Use CSS classes for responsive font size instead of JS
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [fade, setFade] = useState(true);
  const [pendingGroup, setPendingGroup] = useState<number | null>(null);

  useEffect(() => {
    if (pendingGroup !== null) {
      setFade(false);
      const timeout = setTimeout(() => {
        setSelectedGroup(pendingGroup);
        setPendingGroup(null);
        setTimeout(() => setFade(true), 50);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [pendingGroup]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 pt-16" style={{ backgroundColor: "transparent" }}>
      <h1
        className="text-4xl font-bold mb-8"
        style={{
          animation: "colorPulse 3s infinite",
          color: "#32004f",
          display: "inline-block",
        }}
      >
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-3xl px-4 sm:px-8 md:px-2">
        {/* Profile Card */}
        <div className="bg-[#181028] rounded-2xl shadow-xl p-10 sm:p-8 xs:p-6 flex flex-col items-center w-full max-w-md mb-8 md:mb-0 md:h-full md:min-h-[420px]">
          <img
            src="src/images/headshot.png"
            alt="Nick Shahbaz"
            className="w-28 h-28 rounded-lg mb-6 object-cover object-center outline outline-4 outline-[#32004f] bg-gray-900 transition-all duration-300 hover:scale-105 hover:outline-[#dfa2e3] hover:shadow-lg"
            style={{ width: "7rem", height: "7rem" }}
          />
          <h1 className="text-3xl font-bold mb-4 text-[#5b048a] text-center w-full">
            Nick Shahbaz
          </h1>
          <p className="text-base text-gray-300 mb-4 text-center w-full">
            WLU CS Student | Aspiring Full-Stack Developer | Passionate about
            Software Engineering and Creative Technology
          </p>
          <span className="inline-block bg-[#32004f] text-white text-xs font-semibold px-6 py-3 rounded-full mb-6 transition-all duration-300 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3] hover:shadow-lg text-center w-full px-3 py-2">
            Available for work and intern✅
          </span>
        </div>
        {/* Skills Card */}
        <div className="bg-[#181028] rounded-2xl shadow-xl p-10 sm:p-8 xs:p-6 flex flex-col items-center w-full max-w-md md:h-full md:min-h-[420px]">
          <h2 className="text-xl font-semibold text-[#5b048a] mb-4 text-center w-full">
            Tech Skills
          </h2>
          {/* Toggle Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6 justify-center w-full max-w-xs mx-auto text-center">
            {["Languages", "Frameworks", "Data", "Tools"].map((group, idx) => (
              <button
                key={group}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 border-2 w-full flex items-center justify-center text-xs sm:text-xs md:text-sm
                  ${idx === selectedGroup && pendingGroup === null
                    ? "bg-[#5b048a] text-white border-[#dfa2e3] shadow-lg"
                    : "bg-[#181028] text-gray-300 border-[#32004f] hover:bg-[#32004f] hover:text-white hover:scale-105 hover:border-[#dfa2e3]"}
                `}
                style={{
                  textAlign: "center",
                }}
                onClick={() => {
                  if (idx !== selectedGroup && pendingGroup === null) {
                    setFade(false);
                    setPendingGroup(idx);
                  }
                }}
                disabled={pendingGroup !== null}
              >
                {group}
              </button>
            ))}
          </div>
          <hr className="border-t border-[#32004f] mb-4 w-full" />
          {/* Skill Groups */}
          <div
            className={`transition-opacity duration-500 ease-in-out ${fade ? "opacity-100 pointer-events-auto animate-fade-in" : "opacity-0 pointer-events-none"} w-full text-center`}
            key={selectedGroup}
          >
            {selectedGroup === 0 && (
              <div>
                <h3 className="text-base font-semibold text-[#dfa2e3] mb-2 text-center w-full">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-1 justify-center w-full">
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Python
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Assembly
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    JavaScript
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Markdown
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    TypeScript
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    C
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    HTML5
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Java
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    VBA
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    CSS3
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    SQL
                  </span>
                </div>
              </div>
            )}
            {selectedGroup === 1 && (
              <div>
                <h3 className="text-base font-semibold text-[#dfa2e3] mb-2 text-center w-full">
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-1 justify-center w-full">
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    React
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Angular
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Vue
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Django
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Flask
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Spring
                  </span>
                </div>
              </div>
            )}
            {selectedGroup === 2 && (
              <div>
                <h3 className="text-base font-semibold text-[#dfa2e3] mb-2 text-center w-full">
                  Data
                </h3>
                <div className="flex flex-wrap gap-1 justify-center w-full">
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    MySQL
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    PostgreSQL
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    MongoDB
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    SQLite
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Pandas
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    NumPy
                  </span>
                </div>
              </div>
            )}
            {selectedGroup === 3 && (
              <div>
                <h3 className="text-base font-semibold text-[#dfa2e3] mb-2 text-center w-full">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-1 justify-center w-full">
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Git
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Docker
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Kubernetes
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Jenkins
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    VS Code
                  </span>
                  <span className="bg-[#2d1847] text-white px-1.5 py-0.5 rounded-full text-sm mb-1 transition-all duration-200 hover:scale-105 hover:bg-[#5b048a] hover:text-[#dfa2e3]">
                    Postman
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add fade-in animation to global CSS (e.g., in index.css or App.css):
// @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
// .animate-fade-in { animation: fade-in 0.5s; }

export default About;
