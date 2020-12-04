import React, { useState, useEffect } from "react";

const Timer = () => {

  const [mainDifference, setMaindiffrence] = useState(1800000)

  const getTimeDifference = () => {

    let timeLeft = {};
    if (mainDifference > 0) {
      timeLeft = {
        days: Math.floor(mainDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((mainDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((mainDifference / 1000 / 60) % 60),
        seconds: Math.floor((mainDifference / 1000) % 60)
      };
    }
    return timeLeft;

  };

  const [timeLeft, setTimeLeft] = useState(getTimeDifference());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(getTimeDifference());
      setMaindiffrence(mainDifference - 1000)
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Timer;
