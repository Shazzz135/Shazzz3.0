import React from "react";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Shazzz3.0</h1>
        <p className="text-2xl font-bold">Explore My Profile</p>
      </div>
    </section>
  );
};

export default Home;