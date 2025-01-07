import React, {useState,useRef} from 'react'

{/*function Table() {
  function increament(){
    setInterval(() => {
        currentValue(currentValue=>currentValue+1)
    }, 1000);
  }
  function decreament(){
    clearInterval()
  }
*/}
function Table(){
const increment = () => {
  intervalRef.current = setInterval(() => {
    currentValue((prevValue) => prevValue + 1);
  }, 1000);
};
const decrement = () => {
  clearInterval(intervalRef.current); 
  intervalRef.current = null; 
};

  const [value,currentValue]=useState(0);
  const intervalRef = useRef(null);
  return (
    <div>
      <h1 className='Timer' style={{justifyContent:'center',display:'flex'}}>TIMER</h1>
      <div className="main" style={{justifyContent:'center',display:'flex',alignItems:'center', gap:'5px'}}>
        <button onClick={increment}>start</button>
        <h2 >{value}</h2>
        <button onClick={decrement}>stop</button>
      </div>
    </div>
  )
}

export default Table
