import React, { useState } from "react";

const ControlledComponents = () => {
    // const [name, setName] = useState(null);
    // const [email, setEmail] = useState(null);

    // const username = (event)=> {
    //     setName({...name, name : event.target.value})
    //     console.log(name)
    // }
    // const useremail = (event)=> {
    //     setEmail({...email, email : event.target.value})
    //     console.log(email)
    // }
    // const handleSubmit = (event)=> {
    //     event.preventDefault();

    //     console.log(name);
    //     console.log(email);
    // }

    const [val, setVal] = useState({name : "", email : ""})
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(val);
    }
    const username = (e)=> {
        setVal({...val, name: e.target.value})
        console.log(val)
    }
    const useremail = (e) => {
        setVal({...val, email : e.target.value})
        console.log(val)
    }

  return (
    <div className="border bg-pink-100 rounded-md  text-black w-100 px-2 py-4">
      <h3 className="text-center font-bold">Controlled Components</h3>
      <form className="px-2  flex flex-col gap-3 items-center" action="">
        <div className="w-70">
          <label htmlFor="username">Name : </label>
          <input onChange={username} type="text" id="username" placeholder="Your Name"/>
        </div>
        <div className="w-70">
          <label htmlFor="email">Email Id : </label>
          <input onChange={useremail} type="email" id="email" placeholder="Email Id" />
        </div>

        <button onClick={handleSubmit} className="w-fit border rounded-md py-2 px-4 bg-blue-400 text-white" type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ControlledComponents;
