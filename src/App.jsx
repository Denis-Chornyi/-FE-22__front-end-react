import React from 'react';
import Counter from './counter';

const App = () => {
  return (
    <>
      <Counter start={17} interval={100}/>
      <Counter start={-17} interval={1000}/>
      <Counter start={0} interval={500}/>
    </>
  );
};

export default App;
