import React from 'react';

const Greeting = props => {
  return (
    <div className="greeting">{`My name is ${props.user.firstName} ${props.user.lastName}. I am ${props.user.age()} years old`}</div>
  );
};

export default Greeting;
