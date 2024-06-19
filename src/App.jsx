import React from 'react';
import UsersList from './UsersList';

const App = () => {
  const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Bob Doe', age: 18 },
    { id: 3, name: 'Sam Smith', age: 23 },
    { id: 4, name: 'John Smith', age: 54 },
  ];

  return <UsersList users={users} />;
};

export default App;