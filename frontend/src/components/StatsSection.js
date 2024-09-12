import React from 'react';

function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Empower your future with cutting-edge skills</h2>
        <p className="text-lg mb-6">New, Embrace innovation, master technology, & shape the digital world</p>
        <div className="flex justify-around">
          <div>
            <h3 className="text-2xl font-bold">Total Students</h3>
            <p className="text-xl">11</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Placed Students</h3>
            <p className="text-xl">5</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Unplaced Students</h3>
            <p className="text-xl">6</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
