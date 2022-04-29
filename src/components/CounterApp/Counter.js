import React, { Fragment, useState } from 'react';
import Button from './Button.js';
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decrementCounter = () => {
    setCounter((prevState) => prevState - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <Fragment>
      <div>{counter}</div>
      <Button operation="+" clickHandler={incrementCounter} />
      <Button operation="-" clickHandler={decrementCounter} />
      <Button operation="Reset" clickHandler={resetCounter} />
    </Fragment>
  );
};

export default Counter;
