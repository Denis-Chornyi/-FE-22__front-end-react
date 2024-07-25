import React, { useState } from 'react';
import Status from './Status';

const App = () => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleOnline = () => {
    setIsOnline(true);
  };

  const toggleOffline = () => {
    setIsOnline(false);
  };

  return (
    <div className="status">
      <Status isOnline={isOnline} toggleOnline={toggleOnline} toggleOffline={toggleOffline} />
    </div>
  );
};

export default App;
