import { useState, useEffect } from "react";

export function CurrentTime(isTimerStart) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // console.log("inside current Time");

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

export function TotalTime(isTimerStart) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("isTimerStart", isTimerStart);

    let interval = null;
    if (isTimerStart) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      console.log("inside clean up");
    };
  }, [isTimerStart]);

  return timer;
}
