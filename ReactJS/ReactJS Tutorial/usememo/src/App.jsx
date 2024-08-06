
// 1.USEMEMO HOOKS  TO SEE THIS HOOK REMOVE COMENT FROM LINE 3 TO 29 
// import { useMemo, useState } from 'react'

// // what is use memo and why we use it

// function App() {
  
//  const[add,setadd]=useState(0) 
//  const[minus,setminus]=useState(100)

// //  USEMEMO HOOK 
//  const multiplication=useMemo(()=>{
//   console.log("usememo is render")
// return add*10 },[add])

//   return (
//     <>
//     {multiplication}
//     <h1>learning usememo</h1>
//     {add}
//     <button onClick={()=>{setadd(add+1)}}>addition</button><br />
//     {minus}
//     <button onClick={()=>{setminus(minus-1)}}>substraction</button>
//     </>
//   )
// }

// export default App



// TO SEE USECALLBACK HOOK COMMENT  OUT  LINE 34 TO SO ON

import React, { useCallback, useMemo, useState } from 'react'
import Child from './child';
function App() {
  const[add,setadd]=useState(0)
  const[count,setcount]=useState(0)
  // const learning=function(){  }
  const learning=useCallback(()=>{console.log("hii")},[])

  // useCallback(()=>{console.log("hii")},[])
  // useEffect(()=>{console.log("hii")})
  // useMemo(()=>{console.log("hii")},[])
  return (
    <div>

      <h1>learn usecallback hook</h1>
      <Child learning={learning}/>
      { add }
      <button onClick={()=>setadd(add+1)}>addition</button>
      <button onClick={()=>{setcount(count+1)}}>count</button>
      {count}
    </div>
  )
}

export default App