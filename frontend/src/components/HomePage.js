import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import Partners from './Partners';
import FeaturesSection from './FeaturesSection';
import EmpowerSection from './EmpowerSection';
import CardList from './CardList';
import axios from 'axios';
import { useStats } from '../StatsContext';

function HomePage() {
  const [cards, setCards] = useState([]);
  const { stats } = useStats();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <HeroSection />
      <Partners />
      <FeaturesSection />
      <EmpowerSection />

      {/* Display Stats */}
      <div className="stats-container">
        <div className="stat-item total-students">
          <h2>Total Students</h2>
          <p>{stats.totalStudents}</p>
        </div>
        <div className="stat-item placed-students">
          <h2>Placed Students</h2>
          <p>{stats.placedStudents}</p>
        </div>
        <div className="stat-item unplaced-students">
          <h2>Unplaced Students</h2>
          <p>{stats.unplacedStudents}</p>
        </div>
      </div>

      {/* CardList Component */}
      <CardList cards={cards} />
    </div>
  );
}

export default HomePage;
