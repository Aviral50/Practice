import React, { useState } from "react";

function Practice(data) {
  const [name, setName] = useState();
  function handleSubmit(e){
    props.getData(name)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={setName}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>submit</button>
      </form>
    </>
  );
}

export default Practice;
