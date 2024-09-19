import React, { useState } from 'react';
import { useStats } from '../StatsContext'; // Import useStats from StatsContext


const roles = ['Developer', 'Designer', 'Manager'];
const courses = ['React Basics', 'UI/UX Design', 'JavaScript Essentials'];

function AdminPage() {
  const { stats, updateStats } = useStats(); // Destructure stats and updateStats from StatsContext
  const [formData, setFormData] = useState({
    name: '',
    role: roles[0],
    email: '',
    phoneNumber: '',
    course: courses[0],
    status: 'Unplaced',
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update users list
    setUsers((prevUsers) => [...prevUsers, formData]);

    // Update stats based on the new user status
    const newTotalStudents = users.length + 1; // Including the new user
    const newPlacedStudents = users.filter(user => user.status === 'Placed').length + (formData.status === 'Placed' ? 1 : 0);
    const newUnplacedStudents = newTotalStudents - newPlacedStudents;

    // Update StatsContext
    updateStats({
      totalStudents: newTotalStudents,
      placedStudents: newPlacedStudents,
      unplacedStudents: newUnplacedStudents,
    });

    // Reset the form after submission
    setFormData({
      name: '',
      role: roles[0],
      email: '',
      phoneNumber: '',
      course: courses[0],
      status: 'Unplaced',
    });
  };

  const handleDelete = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Fill This Form</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        {/* Form fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="Placed">Placed</option>
            <option value="Unplaced">Unplaced</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Display added users */}
      <div>
        {users.map((user, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Course:</strong> {user.course}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-600 text-white p-2 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
