import React, { useEffect, useState, useRef } from "react";

export const MutableRef = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const date = new Date();
  console.log(date);
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimes-{time}-<button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
