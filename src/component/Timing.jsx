import React, {useState} from 'react';

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
    <button style={{height:'30%',marginTop:'35px'}} onClick={handleClick}>-</button>
    <p style={{display:'flex',fontSize:'30px',alignItems:'center',justifyContent:'center'}} >{count}</p>
    <button style={{height:'30%',marginTop:'35px'}} onClick={handleUpClick}>+</button>
    </div>
    

  )
}

export default Timing
