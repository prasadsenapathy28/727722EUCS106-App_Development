import React, { useState, useRef, useEffect } from 'react';


const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(0);
  };

  const format = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <div style={{ fontSize: '50px', marginBottom: '20px' }}>
        {format(time)}
      </div>
      <button onClick={startTimer} style={{ marginRight: '10px', color: 'blueviolet', cursor:'pointer' }}>Start</button>
      <button onClick={stopTimer} style={{ marginRight: '10px',  color: 'blueviolet', cursor:'pointer' }}>Stop</button>
      <button onClick={resetTimer} style={{ color: 'blueviolet', cursor:'pointer'}}>Reset</button>
    </div>
  );
};

export default Stopwatch;
