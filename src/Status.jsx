import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline, toggleOnline, toggleOffline }) => {
  return isOnline ? <Online toggleOffline={toggleOffline} /> : <Offline toggleOnline={toggleOnline} />;
};

export default Status;