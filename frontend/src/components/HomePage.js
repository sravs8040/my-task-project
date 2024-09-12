import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import Partners from './Partners';
import FeaturesSection from './FeaturesSection';
import EmpowerSection from './EmpowerSection';
import CardList from './CardList';
import axios from 'axios'; // Import axios if you're making API requests
import '../styles/App.css';

function HomePage() {
  const [cards, setCards] = useState([]); // State to store fetched cards

  // Fetch cards from backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards');
        setCards(response.data);  // Store fetched cards in state
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);  // Empty dependency array to run only on mount

  return (
    <div>
      <HeroSection />
      <Partners />
      <FeaturesSection />
      <EmpowerSection />
      <CardList cards={cards} />  {/* Pass fetched cards to CardList */}
    </div>
  );
}

export default HomePage;
