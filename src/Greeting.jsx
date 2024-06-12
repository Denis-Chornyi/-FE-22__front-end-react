import React from 'react';

const Greeting = props => {
  return (
    <div className="greeting">{`My name is ${props.user.firstName} ${
      props.user.lastName
    }. I am ${Math.floor(
      (new Date() - props.user.birthDate) / (1000 * 60 * 60 * 24 * 30 * 12)
    )} years old`}</div>
  );
};

export default Greeting;
