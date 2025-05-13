import React, { useState } from 'react'


function Todo(){
  const[activity,setActivity]=useState('')
  const[item,setItem]=useState([])

  function addActivity(){
    setItem((item)=>{
      const newList=[...item,activity]
      console.log(newList)
      setActivity('')
      return newList
    })
  }
  function removeActivity(i) {
    const updateList=item.filter((element,id)=>{
      return i!=id;
    })
    setItem(updateList)
  }
  function removeAll(){
    setItem([])
  }




  return(
    <div className="container">
      <h1 style={{justifyContent:'center',display:'flex'}}>TODO LIST </h1>
      <input type ='text' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <button onClick={addActivity}>add</button>
      <h1>here is our list</h1>
      {item!=[] && item.map((data,i)=>{
        return(
          <>
          <p key={i}>
           <div className="item">{data}</div>
           <button onClick={()=>removeActivity(i)}>remove</button>
          </p>
          </>
        )

      })}
      {item.length>=1 &&
      <button onClick={removeAll}>remove all list</button>}
    </div>
  )
}
export default Todo;