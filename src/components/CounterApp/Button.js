import React from 'react';

const Button = (props) => {
  const withidHandler = () => {
    //debugger;
    props.clickHandler(props.id);
  };
  if (!props.id) {
    return <button onClick={props.clickHandler}>{props.operation}</button>;
  } else {
    return <button onClick={withidHandler}>{props.operation}</button>;
  }
};
export default Button;
