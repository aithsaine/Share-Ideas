"use client"
import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'

const Page = () => {
    const [email,setEmail] = useState("")
    const [first_name,setFirstName] = useState("")
    const [last_name,setLastName] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState({})
    const register = async()=>
    {
        const response = await axios.post("api/auth/register",{first_name,last_name,email,password})
       if(response.data.status==201)
        {
         toast.success(response.data.message)
        }
        else{
          if(response.data.message)
          {
         return toast.error(response.data.message)
          }
          setErrors(response.data.error.errors)
          console.log(response)
        return  toast.error('Valider votre information')
        }
      }

    
  return (
    <section className='p-4 text-center'>
      <h1 className='text-2xl font-bold '>Register</h1>
      <div className='flex flex-col  sm:items-center items-start justify-center m-6'>

      <div className='flex flex-col sm:w-1/2   w-full my-3'>
        <label className='text-left text-xl text-gray-800 py-4' htmlFor="fname">First Name:</label>
      <input type="text" className=' rounded-md p-2 text-black  border ' onChange={e=>setFirstName(e.target.value)} placeholder='Your First Name ' />
      </div>
      <div className='flex flex-col sm:w-1/2   w-full my-3'>
        <label className='text-left text-xl text-gray-800 py-4' htmlFor="lname">Last Name:</label>
      <input type="text" className=' rounded-md p-2 text-black border' onChange={e=>setLastName(e.target.value)} placeholder='Your Last Name ' />
      </div>
      <div className='flex flex-col sm:w-1/2   w-full my-3'>
        <label className='text-left text-xl text-gray-800 py-4' htmlFor="fname">Email:</label>
      <input type="email" className='  rounded-md p-2 text-black border' onChange={e=>setEmail(e.target.value)} placeholder='Your Email ' />
      </div>
      <div className='flex flex-col sm:w-1/2   w-full my-3'>
        <label className='text-left text-xl text-gray-800 py-4' htmlFor="fname">Password:</label>
      <input type="password" onChange={e=>setPassword(e.target.value)} className=' rounded-md p-2 text-black border'placeholder='Your Password ' />
      </div>
      <button onClick={register} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2">Register</button>

      </div>
    </section>
  )
}

export default Page
