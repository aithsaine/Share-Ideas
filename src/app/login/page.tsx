"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
const Page = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()
    const login = async()=>
    {
      const response = await axios.post("api/auth/login",{email,password})
      if(response.data.status == 201)
      {
        
        toast.success(response.data.message)
        return router.push("/")
      }
     return toast.error(response.data.message)
    }
  return (
    <section className='p-4 text-center'>
      <h1 className='text-2xl font-bold '>Login</h1>
      <div className='flex flex-col w-full items-start sm:items-center sm:justify-center m-6'>
     
      
      <div className='flex flex-col  sm:w-1/2 w-full my-3'>
        <label className='box-shadow-10 text-left text-xl text-gray-800 py-4' htmlFor="fname">Email:</label>
      <input type="email" onChange={e=>setEmail(e.target.value)} className='  rounded-md p-2 text-black border'placeholder='Your Email ' />
      </div>
      <div className='flex flex-col  sm:w-1/2  w-full my-3'>
        <label className='text-left text-xl text-gray-800 py-4' htmlFor="fname">Password:</label>
      <input type="password" onChange={e=>setPassword(e.target.value)} className=' rounded-md p-2 text-black border'placeholder='Your Password ' />
      </div>
      <label htmlFor="remember" className='text-sm'><input id="remember" type="checkbox" name="" /> Remember me</label>
        <Link  href="/register" >I dont have an account</Link>
      <button type="button" onClick={login} className="text-white bg-gradient-to-r mt-5 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2">Login</button>
 
      </div>
    </section>
  )
}

export default Page
