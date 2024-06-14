import React from 'react';

const Offline = ({button}) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={button}>Reconnect</button>
    </>
  );
};

export default Offline;
