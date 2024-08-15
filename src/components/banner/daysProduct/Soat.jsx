import React, { useState, useEffect } from "react";

const Soat = ({ hours }) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date().getTime() + hours * 60 * 60 * 1000 - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.hours <= 0 &&
        newTimeLeft.minutes <= 0 &&
        newTimeLeft.seconds <= 0
      ) {
        clearInterval(timer);
        setExpired(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {expired ? (
        <span>EXPIRED</span>
      ) : (
        <span>
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      )}
    </div>
  );
};

export default Soat;
