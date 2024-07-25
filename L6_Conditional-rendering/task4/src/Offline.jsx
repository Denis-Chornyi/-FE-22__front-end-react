import React from 'react';

const Offline = ({ toggleOnline }) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={toggleOnline}>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
