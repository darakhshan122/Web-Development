import { useState,useRef } from 'react'


function App() {
  const refelement=useRef("")
  // const [name,setname]=useState("")
  function reset(){
    refelement.current.value="";
  
  }
  

  function select(){
    refelement.current.focus()
     refelement.current.select()
  }
  function color(){
    refelement.current.style.color="white"
    refelement.current.style.backgroundColor="violet"
  }
  function submit1(e){
    e.preventDefault()

  }

  return (
    <>
    <form action="" onSubmit={submit1}>
      <input  ref={refelement} type="text" /> {/* ref is an attribute of input tag */}
      
      <button onClick={reset}>reset</button>
      <button onClick={color}>color</button>
      <button onClick={select}>select</button>
      <button   >submit</button>
      </form>
    </>
  )
}

export default App
