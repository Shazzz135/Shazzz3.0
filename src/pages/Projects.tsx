import React from "react";

const Projects: React.FC = () => {
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
        Projects
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        Here are some of my recent projects. More coming soon!
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {/* Example Project Card */}
        <div className="bg-transparent border border-[#5b048a] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#dfa2e3] mb-2">Project Title</h2>
          <p className="text-base text-gray-300 mb-2">
            Brief description of the project, technologies used, and your role.
          </p>
          <a
            href="#"
            className="text-[#dfa2e3] underline hover:text-[#5b048a] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default Projects;
