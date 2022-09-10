import { useState } from "react";
import { Button } from "../Button";

export const Timer = () => {
  let [time, setTime] = useState(0);
  let newTime: number;
  let isStart = false;
  const startTimer = () => {
    if (!isStart) {
      newTime = window.setInterval(() => setTime((time += 1)), 1000);
    }
    isStart = true;
  };
  const stopTimer = () => {
    clearInterval(newTime);
  };
  const reset = () => {
    clearInterval(newTime);
    setTime(0);
  };

  return (
    <div>
      <h1>{time}</h1>
      <Button text={"Start"} onClick={startTimer} />
      <Button text={"Stop"} onClick={stopTimer} />
      <Button text={"Reset"} onClick={reset} />
    </div>
  );
};
