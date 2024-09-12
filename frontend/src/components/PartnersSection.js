import React from 'react';
import partnersData from '../data/partners';

function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Placement Partners</h2>
        <div className="flex flex-wrap justify-center">
          {partnersData.map((partner, index) => (
            <img key={index} src={partner.logo} alt={partner.name} className="mx-4 mb-4" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
