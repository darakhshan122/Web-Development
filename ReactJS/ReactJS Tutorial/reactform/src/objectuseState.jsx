import React from 'react'
import { useState } from 'react'
 //USESTATE HOOK WITH OBJECT
function objectuseState() {
  
    const [data,setdata]=useState({first_name:"darakhshan",last_name:"kausar"})

    function update()
    {
        setdata({...data,first_name:"yoshita"})
    }
    
  return (
    <> 
    <div className='my-10 border border-2 border-green-950 bg-slate-500 flex flex-col justify-center items-center  shadow-slate-700'>
    <h1 className='bg-slate-300'>useState hook with object( 2nd component of this folder)</h1>
    <h1 className=' rounded-md text-2xl'>first name is {data.first_name} and last name is {data.last_name}</h1>
    <button onClick={update} className='w-20 rounded-xl bg-red-950 text-white align-middle'>update</button>
    </div>
       
    </>
  )
}

export default objectuseState