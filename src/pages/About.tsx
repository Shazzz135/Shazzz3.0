import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-xl text-center">
        Welcome to the About page! Here you can learn more about Shazzz3, my
        background, experiences, and what drives my passion for technology and
        creativity.
      </p>
    </div>
  );
};

export default About;
