// This code demonstrates the use of async/await in JavaScript.
    let heading1= document.getElementById("one")
    let heading2= document.getElementById("two")
    let heading3= document.getElementById("three")
    let btn= document.getElementById("btn")
    
    btn.addEventListener('click',async()=>{
        await addColor(heading1,"yellow",1000)
    })
    btn.addEventListener('click',async()=>{
        await addColor(heading2,"blue",1000)
   })
    btn.addEventListener('click',async()=>{
        await addColor(heading3,"green",1000)
    })
    
    function addColor(element,color,time){
        return new Promise((resolve,reject))=>{
       if (element){
        setTimeout(()=>{
            element.style.color=color
            resolve()
        },time);
  }
}
    }
    // This code demonstrates the use of async/await in JavaScript.

