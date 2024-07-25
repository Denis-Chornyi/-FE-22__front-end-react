import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

console.log(element);

const root = ReactDOM.createRoot(rootElement);
root.render(element);
