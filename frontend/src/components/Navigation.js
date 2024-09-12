import React from 'react';

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title */}
        <div className="text-white text-lg font-bold">
          LearnHub
        </div>
        {/* Right side: Only Admin */}
        <div>
          <a href="/admin" className="text-white hover:text-gray-300">
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
