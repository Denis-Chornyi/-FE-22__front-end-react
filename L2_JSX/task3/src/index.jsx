import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const rootElement = document.querySelector('#root');

export const renderSecons = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

renderSecons(new Date());

setInterval(() => renderSecons(new Date()), 1000);
