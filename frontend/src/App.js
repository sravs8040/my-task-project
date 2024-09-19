import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import Layout from './components/Layout';
import { StatsProvider } from './StatsContext'; // Same directory




function App() {
  return (
     <StatsProvider> {/* Wrap everything inside StatsProvider */}
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
    </StatsProvider>
  );
}

export default App;
