import React, { useState, useEffect } from 'react';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the /users API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        setUsers(data);  // Store the users in the state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);  // Empty dependency array to fetch users on component mount

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UsersTable;
