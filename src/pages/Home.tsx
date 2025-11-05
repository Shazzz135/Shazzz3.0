import React from "react";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 pt-16" style={{ backgroundColor: 'transparent' }}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
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
        <p className="text-2xl md:text-4xl font-bold">WLU Undergraduate Student of CS</p>
      </div>
    </section>
  );
};

export default Home;