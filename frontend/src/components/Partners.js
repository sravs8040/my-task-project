import React from 'react';
import partnersData from '../data/partners';

function Partners() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Our Placement Partners</h3>
        <div className="flex flex-wrap justify-center">
          {partnersData.map((partner, index) => (
            <div key={index} className="m-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
