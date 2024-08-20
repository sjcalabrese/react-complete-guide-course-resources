import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal} from 'react-dom'
//need to use forwardRef to pass the ref to the dialog element
//when structured like this you will then received a second argument (ref) outside the props argument

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const dialog = useRef();
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  //create portal allows you to move where this element will be rendered to, which is the 
  //dev element with the modal id to help prevent it from potentially being stuck behind another
  //element on a larger application
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You Stopped the timer with <strong>{formattedRemainingTime}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')

  );
});
export default ResultModal;
