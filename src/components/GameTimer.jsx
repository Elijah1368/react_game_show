import { useEffect, useState } from "react";

export default function GameTimer({ setTimeOut, questionNumber }) {
  const [GameTimer, setGameTimer] = useState(30);

  useEffect(() => {
    if (GameTimer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setGameTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [GameTimer, setTimeOut]);

  useEffect(() => {
    setGameTimer(30);
  }, [questionNumber]);
  return GameTimer;
}
