import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date(2007, 0, 1),
  age() {
    const userAge = new Date() - this.birthDate;
    return Math.floor(userAge / (1000 * 60 * 60 * 24 * 30 * 12));
  }
};

ReactDOM.render(<Greeting user={userInfo} />, document.querySelector('#root'));
