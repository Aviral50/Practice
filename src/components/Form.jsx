import React, { useState,useEffect } from 'react'

function Form(){
const data={name:'',Email:'',Numb:''}
  const[input,setInput]=useState('data')
  const[flag,setFlag]=useState('false')

  function handleData(e){
    setInput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }
  useEffect(() => {
    console.log('registtered');
  }, [flag]);
  
  function handleSubmit(e){
  e.preventDefault();
  if(!input.name || !input.Email || !input.Numb){
   alert('all filds are mandatory')
  }
  else{
    setFlag(true)
  }
  }
  return (
    <div>
{<pre><h2>{flag} hello{input.name} you registtered</h2></pre>}
 <div className="container" onSubmit={handleSubmit}>
    <h1>Registration Form</h1>
   Name <input type='text'  name='name'value={input.name} onChange={handleData}></input><br/>
   Email <input type='email' name='email' value={input.Email} onChange={handleData}></input><br/>
   Numb <input type='number' name='numb' value={input.Numb} onChange={handleData}></input><br/>
<button >submit</button>
 </div>
    </div>
  )
}

export default Form
