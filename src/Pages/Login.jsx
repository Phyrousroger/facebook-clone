import React, { useState } from 'react'

const Login = () => {
    // const {}
    const [name,setName]= useState("")
    const [password,setPassword]=useState("")

    const loginhandler=(e)=>{
        e.preventDefault();
        console.log(name,password);
    }
  return (
    <form onSubmit={loginhandler} className="h-screen flex bg-white/[0.8] items-center justify-center">
        <div className=" shadow  p-3  py-5 rounded-md space-y-4 w-1/3 bg-white">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className=" border rounded-md text-lg focus:border-blue-500 outline-none pl-3 py-[10px] w-full" placeholder="Example address or phone number" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className=" border rounded-md text-lg focus:border-blue-500 outline-none pl-3 py-[10px] w-full" placeholder="Password" />
            <div className=" w-full">
                <button className=" py-2 rounded-md font-bold text-xl w-full bg-blue-600 text-white">Log in</button>
                <a href="" className=" block pt-3  text-center text-blue-600 hover:underline  transition text-sm ">Forgotten password?</a>
            </div>
            <div className=" border-t pt-4 text-center">
                <button className="text-white py-2 text-[20px] rounded-md px-3 font-semibold bg-lime-600">Create new account </button>
            </div>
        </div>
    </form>
  )
}

export default Login