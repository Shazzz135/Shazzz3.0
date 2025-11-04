import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "transparent" }}
    >
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-xl text-center">
        Welcome to the About page! Here you can learn more about Shazzz3, my
        background, experiences, and what drives my passion for technology and
        creativity.
      </p>
    </section>
  );
};

export default About;
