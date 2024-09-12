import React, { useState } from 'react';
import Layout from './Layout';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    course: '',
    status: 'Unplaced',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Layout>
      <section className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Fill This Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full border rounded"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Role:</span>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-input mt-1 block w-full border rounded"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full border rounded"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Phone Number:</span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input mt-1 block w-full border rounded"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Course:</span>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="form-select mt-1 block w-full border rounded"
            >
              <option value="">Select a course</option>
              <option value="React Basics">React Basics</option>
              <option value="UI/UX Design">UI/UX Design</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Status:</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-select mt-1 block w-full border rounded"
            >
              <option value="Unplaced">Unplaced</option>
              <option value="Placed">Placed</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
        {/* Add logic to display submitted form data */}
      </section>
    </Layout>
  );
};

export default AdminForm;
