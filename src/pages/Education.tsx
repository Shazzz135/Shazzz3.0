import React from "react";

const Experinces: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4" style={{ backgroundColor: 'transparent' }}>
      <h1
        className="text-4xl font-bold mb-4"
        style={{
          animation: "colorPulse 3s infinite",
          color: "#32004f",
          display: "inline-block"
        }}
      >
        Education
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        My interest for Developing began in high school where I took several computer science courses. This is what it has led me too so far.
      </p>
      {/* University Stats Container */}
      <div className="mt-8 w-full max-w-2xl bg-transparent border border-[#5b048a] rounded-lg p-6 flex flex-col items-start justify-center min-h-[120px]">
        <span className="text-lg font-semibold text-[#dfa2e3] mb-2">Wilfrid Laurier University</span>
        <span className="text-base text-white mb-1">
          • BSc, Computer Science (3rd Year)
        </span>
        <span className="text-base text-gray-300 mb-1">
          • Projected Minor: Education
        </span>
        <span className="text-base text-gray-300 mb-1">
          • (Core Course) GPA: <span className="font-bold text-green-400">3.3</span>
        </span>
        <span className="text-sm text-gray-400 mb-2">• 2023 - 2027</span>
        <hr className="border-t border-[#5b048a] my-2 w-full" />
        <span className="text-lg font-semibold text-[#dfa2e3] mb-2">Laurier Computing Society</span>
        <span className="text-base text-gray-300 mb-1">
          • Assists CS review sessions using GitHub, Replit, and Obsidian.
        </span>
        <span className="text-base text-gray-300 mb-1">
          • Attend weekly meetings, manage timelines, and provide status updates.
        </span>
      </div>
      {/* Add more experience details/components here */}
    </section>
  );
};

export default Experinces;
