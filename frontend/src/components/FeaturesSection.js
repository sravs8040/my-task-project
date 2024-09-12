import React from 'react';

function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-bold mb-4">Certificate Distribution</h4>
            <p>We offer certificates to validate and recognize your achievement.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-bold mb-4">Knowledge</h4>
            <p>We deliver transformative knowledge that empowers and inspires.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-bold mb-4">Hands-on Experience</h4>
            <p>We provide hands-on experience for real-world learning. You learn best by doing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
