import React, {useState} from 'react';
import TimerLogic from './TimerLogic';
import TimerScreen from './TimerScreen';

function Timing() {

   
    function handleUpClick(){
        setCount(count+1)
    }
    function handleClick(){
        setCount(count-1)
    }

     const [count,setCount] = useState(0);
    
  return (
    <div className='time' style={{width:'100%',display:'flex',justifyContent:'center',gap:'10px'}}>
    {/*<button style={{height:'30%',marginTop:'35px'}} onClick={handleClick}>-</button>
    <p style={{display:'flex',fontSize:'30px',alignItems:'center',justifyContent:'center'}} >{count}</p>
    <button style={{height:'30%',marginTop:'35px'}} onClick={handleUpClick}>+</button>*/}
    
    <TimerLogic count={count}/>
    <TimerScreen
     handleClick={handleClick}
     handleUpClick={handleUpClick}
    />
    </div>
    
  );
}

export default Timing;
