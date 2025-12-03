import React from 'react'
import { useForm } from 'react-hook-form'

export const ReactHookForm = () => {
    const {register, handleSubmit} = useForm();

  return (
    <div className="border bg-pink-100 rounded-md  text-black w-100 px-2 py-4">
      <h3 className="text-center font-bold">React Hook Form</h3>
      <form className="px-2  flex flex-col gap-3 items-center" action="">
        <div className="w-70">
          <label htmlFor="username">Name : </label>
          <input {...register('username')} type="text" id="username" placeholder="Your Name"/>
        </div>
        <div className="w-70">
          <label htmlFor="email">Email Id : </label>
          <input {...register("useremail")} type="email" id="email" placeholder="Email Id" />
        </div>
        <button onClick={handleSubmit(data => console.log(data))} className="w-fit border rounded-md py-2 px-4 bg-blue-400 text-white" type="submit"> Submit </button>
      </form>
    </div>
  )
}
