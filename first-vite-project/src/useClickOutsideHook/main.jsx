import { useRef, useState } from "react";
import useCloseWindow from "./hook";

const UseClickOutsideHookExample = () => {
  const [showWindow, setShowWindow] = useState(false);
  const windowRef = useRef(null);

  useCloseWindow(windowRef, handleClickOutside);

  function handleClickOutside() {
    setShowWindow(false);
  }

  return (
    <div className="container">
      {!showWindow ? (
        <button onClick={() => setShowWindow(true)}>Open Window</button>
      ) : (
        <div ref={windowRef} className="window">
          <h1>I'm a window!</h1>
        </div>
      )}
    </div>
  );
};

export default UseClickOutsideHookExample;
