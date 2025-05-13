import React from "react";

function TimerScreen({ handleClick, handleUpClick }) {
  return (
    <div>
      <button
        style={{ height: "30%", marginTop: "35px" }}
        onClick={handleClick}
      >
        -
      </button>
      <button
        style={{ height: "30%", marginTop: "35px" }}
        onClick={handleUpClick}
      >
        +
      </button>
    </div>
  );
}

export default TimerScreen;
