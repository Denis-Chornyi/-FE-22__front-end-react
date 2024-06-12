import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date(2007, 0, 1),
};

ReactDOM.render(<Greeting user={userInfo} />, document.querySelector('#root'));
