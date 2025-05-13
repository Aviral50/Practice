import React from "react";

function TimerLogic({count}) {
  return (
    <div>
      <p
        style={{
          display: "flex",
          fontSize: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        {count}
      </p>
    </div>
  );
}

export default TimerLogic;
