"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from "next/link"


const Nav = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <nav className='w-full   pt-4 mt-5'>
            {/* for desktop  */}
            <div className='sm:flex hidden  justify-between items-center'>

                <div className='flex flex-col'>
                    <Image
                        alt='logo'
                        src={"/assets/images/logo.png"}
                        width={100}
                        height={150}
                        className=''
                    />
                    <p className='text-xl text-center'>Ideas</p>
                </div>
                {!isLogged ? (

                    <div className='me-2 px-6'>


                        <Link href={"/login"} style={{ width: "15dvh" }} className='font-bold hover:bg-gray-500 bg-black text-white rounded py-2 px-10  mx-5 '>Login</Link>
                        <Link href={"/register"} style={{ width: "15dvh" }} className='font-bold border border-black hover:bg-gray-500 hover:text-white rounded py-2 px-10 '>register</Link>

                    </div>
                ) : (
                    <div className='me-2 px-6'>
                        <Link href={"/"} style={{ width: "15dvh" }} className='font-bold hover:bg-gray-500 bg-black text-white rounded py-2 px-10  mx-5 '>create new post</Link>
                        <Link href={"/"} style={{ width: "15dvh" }} className='font-bold border border-black hover:bg-gray-500 hover:text-white rounded py-2 px-10 '>logout</Link>

                    </div>
                )}
            </div>
            {/* for mobile */}
            <div className=' flex sm:hidden flex-col items-end'>

                <span
                    className='flex h-full flex-col cursor-pointer'
                    onClick={_e => {
                        setToggleDropdown(!toggleDropdown)
                        console.log("toggleDropdown")
                    }}
                >
                    <Image
                        alt='logo'
                        src={"/assets/images/logo.png"}
                        width={100}
                        height={150}
                        className='cursor-pointer'
                    />
                    <p className='text-xl text-center'>Ideas</p>
                </span>

                {toggleDropdown && (!isLogged ? (
                    <div style={{ height: "100%" }} className={` fixed flex top-0 bg-white border  w-full flex-col  justify-center items-center me-2 px-6`}>
                        <Image
                            alt="close"
                            src={"/assets/images/close.png"}
                            className='absolute top-5 right-5 cursor-pointer'
                            onClick={e=>setToggleDropdown(false)}
                            width={34}
                            height={34} />
                        <Link href={"/login"} onClick={e=>setToggleDropdown(false)} style={{ width: "15dvh" }} className='font-bold text-xl   px-10  m-3 '>Login</Link>
                        <Link href={"/register"} style={{ width: "15dvh" }} onClick={e=>setToggleDropdown(false)} className='font-bold text-xl px-10 m-3'>Register</Link>

                    </div>
                ) : (

                    <div style={{ height: "100%" }} className={` fixed flex top-0 bg-white border  w-full flex-col  justify-center items-center me-2 px-6`}>
                         <Image
                            alt="close"
                            src={"/assets/images/close.png"}
                            className='absolute top-5 right-5 cursor-pointer'
                            onClick={e=>setToggleDropdown(false)}
                            width={34}
                            height={34} />
                        <Link href={"/"} className='font-bold  text-xl px-10  m-3'>create new post</Link>
                        <Link href={"/"} className='font-bold text-xl px-10  m-3'>logout</Link>

                    </div>

                ))}
            </div>

        </nav>
    )
}

export default Nav
