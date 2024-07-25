import React from 'react';

const Online = ({ toggleOffline }) => (
  <span className="status__text" onClick={toggleOffline}>
    All good!
  </span>
);

export default Online;
