import React, { useEffect, useState } from 'react'
  
//handle multiple inputs 


function form() {
    // const data={name:"",password:"",email:""}//in place of 4 and 5 line of code we can write one line of of code line ni 6
    // const [inputData,setData]=useState(data)
    const [inputData,setData]=useState({name:"",password:"",email:""})
    const [flag,setFlag]=useState(false)
    useEffect(()=>{

    },[flag])

    function handleData(e){
        setData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handlesubmit(e)
        {e.preventDefault()
            if (!inputData.name || !inputData.email || !inputData.password) {
                alert("All fields are mandatory");
              } else {
                // Form submission logic here
                setFlag(true)
               
              }
            

        }
    
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 border-e-8">

    <pre>{(flag)?<h2 className='bg-slate-600 text-white text-xl mb-4 p-2'>hellow {inputData.name} you have registered successfully</h2>:""}</pre>
  
    <form onSubmit={handlesubmit} className='h-96 w-96  p-4'>
                <div>
                    <h1 className='bg-blue-500 text-white text-xl text-center mb-4 p-2'>Registration Form</h1>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div>
                        <label className='block text-gray-700'>Name:</label>
                        <input
                            className='w-full border border-gray-300 p-2 focus:border-gray-500 focus:outline-none'
                            type="text"
                            placeholder='Enter your name'
                            name='name'
                            value={inputData.name}
                            onChange={handleData}
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Email:</label>
                        <input
                            className='w-full border border-gray-300 p-2 focus:border-gray-500 focus:outline-none'
                            type="email"
                            placeholder='Enter your email'
                            name='email'
                            value={inputData.email}
                            onChange={handleData}
                            
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Password:</label>
                        <input
                            className='w-full border border-gray-300 p-2 focus:border-gray-500 focus:outline-none'
                            type="password"
                            placeholder='Enter your password'
                            name='password'
                            value={inputData.password}
                            onChange={handleData}
                            
                        />
                    </div>
                    <button type='submit' className='border border-solid hover:border-dotted py-2 px-4 bg-blue-500 text-white'>Submit</button>
                </div>
            </form>
            </div>

    </>
  )
}

export default form