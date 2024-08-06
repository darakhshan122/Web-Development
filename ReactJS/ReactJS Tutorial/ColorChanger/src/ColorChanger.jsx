import { useState } from 'react'
import './ColorChanger.css'
function ColorChanger(){
  let [colorchange,setcolor]=useState({backgroundColor:"white"})

function red(){ setcolor({backgroundColor:"red"})}
function blue(){ setcolor({backgroundColor:"blue"})}
function orange(){ setcolor({backgroundColor:"orange"})}
function green(){ setcolor({backgroundColor:"green"})}
function refresh(){ setcolor({backgroundColor:"white"})}
  

    return(
      <>
      
       <div className="bodycolor" style={colorchange}>
       <div className="content"><span className='span1'>click on the below buttons to chhange the color</span></div>
        <div className="buttonContainer">
          <button className="red" onClick={red}>red</button>
          <button className="blue" onClick={blue}>blue</button>
          <button className="green" onClick={green}>green</button>
          <button className="orange" onClick={orange}>orange</button>
          <button className="refresh" onClick={refresh}>refresh</button>
        </div>
        </div>

      </> 
    )
    
}
export default ColorChanger