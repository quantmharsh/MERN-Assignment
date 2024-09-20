import React, { useState } from 'react';

const UserForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  // State to manage the newly created user
  const [newUser, setNewUser] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend API using fetch
      const response = await fetch('http://localhost:3001/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      // Parse the JSON response
      const newUser = await response.json();

      // Update the newUser state with the response data
      setNewUser(newUser);

      // Clear the form inputs after submission
      setFormData({ name: '', email: '', age: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      
      {/* Form to collect user data */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit">Create User</button>
      </form>

      {/* Display newly created user */}
      {newUser && (
        <div>
          <h3>New User Created:</h3>
          <p>Name: {newUser.name}</p>
          <p>Email: {newUser.email}</p>
          <p>Age: {newUser.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
