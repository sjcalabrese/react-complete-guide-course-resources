import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer;
/* cannot use a global veriable as a solution to stop the timer becuase if you try
2 timers at the same time, the firs timer will be thrown away. Resulting in th first time not being stopped
when you attempt to stop it.
*/
//using a ref could be a solution. Then use timer.current to make it component instance specific

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    console.log("Timer started");
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeremaining => prevTimeremaining - 10);
    }, 10);
    
  }

  function handleStop() {
    console.log("Timer stopped");
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerIsActive? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
