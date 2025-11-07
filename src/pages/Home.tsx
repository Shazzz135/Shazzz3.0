import React from "react";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-2 pt-12 md:px-4 md:pt-16" style={{ backgroundColor: 'transparent' }}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
          Hello, I'm{" "}
          <span
            className="name-pulse"
            style={{
              animation: 'colorPulse 3s infinite',
              color: '#32004f',
              display: 'inline-block'
            }}
          >
            Nick Shahbaz
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
          Web Developer
        </p>
      </div>
    </section>
  );
};

export default Home;