import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 28, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row space-x-1">
      <div className="text-center font-bold text-cyan-800 h-10 w-10 rounded-md shadow-orange-200 border-2 bg-white">
        {days}
      </div>
      <p className="text-white font-medium">:</p>
      <div className="text-center font-bold text-cyan-800 h-10 w-10 rounded-md shadow-orange-200 border-2 bg-white">
        {hours}
      </div>
      <p className="text-white font-medium">:</p>
      <div className="text-center font-bold text-cyan-800 h-10 w-10 rounded-md shadow-orange-200 border-2 bg-white">
        {minutes}
      </div>
      <p className="text-white font-medium">:</p>
      <div className="text-center font-bold text-cyan-800 h-10 w-10 rounded-md shadow-orange-200 border-2 bg-white">
        {seconds}
      </div>
    </div>
  );
};

export default Timer;