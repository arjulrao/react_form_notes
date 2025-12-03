import React from 'react'

const NormalForm = () => {
  return (
    <div className='border bg-pink-100 rounded-md  text-black w-100 px-2 py-4'>
        <h3 className='text-center font-bold'>Normal Form</h3>
        <form className='px-2  flex flex-col gap-3 items-center' action="">
            <div className='w-70'>
                <label htmlFor="username">Name : </label>
                <input type="text" id='username' name="username" placeholder='Your Name' /> 
            </div>
           <div className='w-70'>
                <label htmlFor="email">Email Id : </label>
                <input type="email" id='email' name='email' placeholder='Email Id'/>
           </div>
           
                <button className='w-fit border rounded-md py-2 px-4 bg-blue-400 text-white' type='submit'>Submit</button>
        
            
        </form>
    </div>
  )
}

export default NormalForm;
