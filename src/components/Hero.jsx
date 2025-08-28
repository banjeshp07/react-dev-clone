import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section text-center">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        className="react-logo mb-4" 
      />
      <h1 className="display-4 fw-bold">ReactClone</h1>
      <p className="lead mt-3">A modern React documentation clone built with React & Bootstrap</p>
      <a href="/docs" className="btn btn-primary btn-lg mt-4">Get Started</a>
    </section>
  );
};

export default Hero;  // ✅ Ye line bahut important hai
