import React, { useState } from 'react';

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  //helper functions
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text={'PLUS'} />
      <Button onClick={resetCounter} text={'RESET'} />
      <Button onClick={decreaseByOne} text={'MINUS'} />
    </>
  );
};

export default App;
