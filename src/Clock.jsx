import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => moment().utcOffset(offset).format('HH:mm:ss A');

const Clock = ({ location, offset }) => {
  const [clock, setClock] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getTimeWithOffset(offset));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{clock}</div>
    </div>
  );
};

export default Clock;
