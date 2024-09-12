import React from 'react';

function HeroSection() {
  return (
    <section className="bg-blue-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Learn from the best, be your best.</h2>
        <p className="text-lg mb-8">Give yourself an upgrade with our inspiring online courses and join a global community of learners.</p>
        <a href="#get-started" className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600">Get Started</a>
      </div>
    </section>
  );
}

export default HeroSection;
