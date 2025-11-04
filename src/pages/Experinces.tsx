import React from "react";

const Experinces: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4" style={{ backgroundColor: 'transparent' }}>
      <h1 className="text-4xl font-bold mb-4 text-white">Our Experiences</h1>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        Explore some of the experiences we have delivered for our clients.
      </p>
      {/* Add more experience details/components here */}
    </section>
  );
};

export default Experinces;
