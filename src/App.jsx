import React from 'react';
import Clock from './Clock';
import moment from 'moment';

const formatTime = time => moment(time).format('HH:mm:ss a');

const date = offset => formatTime(new Date(new Date().getTime() + offset * 3600000));

const App = () => {
  return (
    <>
      <Clock location="NEW YORK" offset={date(-5)} />
      <Clock location="KYIV" offset={date(2)} />
      <Clock location="LONDON" offset={date(0)} />
    </>
  );
};

export default App;
