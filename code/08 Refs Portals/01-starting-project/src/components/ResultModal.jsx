import { forwardRef } from "react";
//need to use forwardRef to pass the ref to the dialog element
//when structured like this you will then received a second argument (ref) outside the props argument
const ResultModal = forwardRef( function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You Stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})
export default ResultModal;
