import React, { useEffect, useState } from 'react';

function ContactManage() { 
    const localStorageKey="addContactList"//line of code from 5 to 14 is used for local storage so on refreshinh page added list will not remove until it intentionally remove using remove button

    const [addContactList, setContactList] = useState(()=>{
         return JSON.parse(localStorage.getItem(localStorageKey))
   ||[] })
    
    useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(addContactList))

    },[addContactList])



    const [contactData, setContactData] = useState({ name: '', email: '' });//usestate to handle data of input tags

    function handleChange(e) {//function to set  current value of input tag to contactdata
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    }

    function addContact() {//function to add new element to addcontactlist
        if (contactData.name === '' || contactData.email === '') { // Fixed comparison operators and variable naming
            alert('Please fill all inputs>>>');
        }
        else if (!contactData.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
            alert('Please enter a valid email address') }
        else {
            setContactList([...addContactList, { ...contactData }]); // Updated to store objects instead of separate values
            setContactData({ name: '', email: '' });
        }
    }

    function remove(index) { // Function to remove list from addcontactlist
        const updatedList = addContactList.filter((_, id) => id !== index); //  filter logic
        setContactList(updatedList);
    }

    return (
        <>
            <div className='font-bold bg-red-950 text-2xl text-center text-white'>Contact Manage</div>
            <div className='  mx-40  flex flex-col justify-center items-center my-8 w-3/4 h-3/4 text-xl shadow-md'>
                <h1 className='font-bold'>Add Contact</h1>
                <form action='' className='flex flex-col w-3/4 font-serif'>
                    <label htmlFor=''>Name: </label>
                    <input
                        type='text'
                        placeholder='Enter name'
                        name='name'
                        maxLength={25}
                        value={contactData.name} 
                        onChange={handleChange}
                        className='border-2 w-full mb-4'
                    />
                    <label htmlFor=''>Email:</label>
                    <input 
                        type='email'
                        placeholder='Enter email'
                        name='email'
                        value={contactData.email}
                        onChange={handleChange} 
                        className='border-2 w-full'
                    />
                </form>
                <button onClick={addContact} className=' font-serif rounded-lg bg-red-400 w-48 text-white my-4 hover:bg-red-800'> <i class="fa-solid fa-id-badge mr-2"></i>Add Contact</button>
            </div>/

             {/* LOGIC FOR DISPLAYING NEW ELEMENT BY USER LINE */}
            <div className='flex flex-col  w-3/4 mx-40  bg-red-100 shadow-md rounded-md'>
            {addContactList.length>=1 &&  <p className='text-center font-serif font-bold'>  List of Added Contact</p>}
           
                {addContactList.map((contact, index) => ( // USING  map function to display element under addcontactlist 
                    <div key={index} className='flex items-center m-2 justify-center font-light font-serif'>
                        <h1 className='w-1/5  text-right '>{contact.name},</h1>{/* //display object properties*/}
                        <h1 className='w-2/5 '>{contact.email}</h1>  {/*/  display object properties*/}
                        <button className=' m-1 rounded-lg bg-red-400  text-white w-32 hover:bg-red-800' onClick={() => remove(index)}><i className="fa-solid fa-trash mr-2"></i>Remove</button> {/*// Fixed button logic to pass index*/}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ContactManage; 
