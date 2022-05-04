import React from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
  const currentDay = new Date().toDateString();
  useEffect(() => {
    let timer = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return <div>
    <p>{timeNow}</p>
    <p>{currentDay}</p>
  </div>;
};

export default Clock;
