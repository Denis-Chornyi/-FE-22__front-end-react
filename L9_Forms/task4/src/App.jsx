import React from 'react';
import UsersList from './UsersList';

const App = () => {
  const users = [
    { id: 1, name: 'Tad', age: 18 },
    { id: 2, name: 'Anna', age: 45 }
  ];

  return <UsersList users={users} />;
};

export default App;
