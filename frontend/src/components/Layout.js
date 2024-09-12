import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LearnHub</h1>
          <nav>
            <Link to="/admin" className="text-white px-4">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
      <footer className="bg-blue-600 text-white text-center py-4">
        © 2022 Tailwind Labs Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
