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
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  

  function handleStart() {
    console.log("Timer started");
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal(); 
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    console.log("Timer stopped");
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Timer Expired, You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
