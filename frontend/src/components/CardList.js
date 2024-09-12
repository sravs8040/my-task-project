import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards');
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const deleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cards/${id}`);
      // Remove the deleted card from the UI
      setCards(cards.filter(card => card._id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div>
      {cards.map(card => (
        <div key={card._id}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <button onClick={() => deleteCard(card._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
