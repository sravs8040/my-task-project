import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to add a card
  const addCard = async (formData) => {
    try {
      await axios.post('http://localhost:5000/api/cards', formData);
      // Update the UI or perform any necessary actions after successful response
      console.log("Card added successfully");
    } catch (error) {
      console.error("Error adding card:", error);

    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(formData);
    // Reset form after submission
    setFormData({
      title: '',
      description: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Add Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default Form;
