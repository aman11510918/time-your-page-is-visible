import React, { useState, useEffect } from "react";

export function currentTime(isTimerStart) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("inside current Time");
    
    let interval;

    if (isTimerStart) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    } else {
      setTimer(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerStart, timer]);

  return timer;
}

export function totalTime(isTimer) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("inside Total Time");

    let interval;
    if (isTimerStart) {
      setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isTimerStart, timer]);

  return timer;
}
