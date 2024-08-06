import React from 'react'
import { useState } from 'react'

function arrayuseState() {

    //USESTATE WITH ARRAY
    const [data,setdata]=useState(["DARA"])
    function updatevalue()
    {
     setdata([...data,Math.random()])//CLONING ARRAY USING SPREAD OPERATOR
    }


    //USESTATE HOOK WITH OBJECT WITHIN ARRAY
    const [data2,setdata2]=useState([{}])
    function updatevalue2()
    {
     setdata2([...data2,{id:data2.length,value:Math.random()}])//CLONING OBJECT WITHIN ARRAY USING SPREAD OPERATOR
    }

  return (
    <>
    
    <div className='bg-purple-400 my-10 text-center'>
       {/* USESTATE WITH ARRAY */}
        <h1 className='text-2xl bg-slate-300'>3rd component of this folder</h1>
        <h1 className=''>usestate hook with array</h1>
        {data.map((a)=><h1 key={a}>{a}</h1>)}
        <button className='w-20 bg-slate-900 text-white' onClick={updatevalue}>update</button>


        {/* USESTATE HOOK WITH OBJECT WITHIN ARRAY */}
        <h1 className=''>usestate hook with object within array</h1>
        {data2.map((a)=><h1 key={a.id}>{a.value}</h1>)}
        <button className='w-20 bg-slate-900 text-white' onClick={updatevalue2}>update</button>


    </div>
    </>
  )
}

export default arrayuseState