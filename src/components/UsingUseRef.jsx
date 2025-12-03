import React, { useRef } from 'react'

const UsingUseRef = () => {
    const username = useRef(null);
    const useremail = useRef(null);

    const handleSubmit = (event)=> {
        event.preventDefault();

        console.log(username.current.value)
        console.log(useremail.current.value)
    }

    return(
        <div className='border bg-pink-100 rounded-md  text-black w-100 px-2 py-4'>
        <h3 className='text-center font-bold'>Using UseRef</h3>
        <form  className='px-2  flex flex-col gap-3 items-center' action="">
            <div className='w-70'>
                <label htmlFor="username">Name : </label>
                <input ref={username} type="text" id='username' placeholder='Your Name' /> 
            </div>
           <div className='w-70'>
                <label htmlFor="email">Email Id : </label>
                <input ref={useremail} type="email" id='email' placeholder='Email Id'/>
           </div>
           
                <button onClick={handleSubmit} className='w-fit border rounded-md py-2 px-4 bg-blue-400 text-white' type='submit'>Submit</button>
        
            
        </form>
    </div>
    )
}

export default UsingUseRef;


