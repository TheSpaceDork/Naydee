import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { auth,googleProvider,  } from '../config/firebase'
import { Link, useNavigate } from 'react-router-dom'
import Glogo from "../assets/google-color-icon.svg"

import { UserAuth } from '../context/AuthContext'
const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { signIn } = UserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate("/")
    } catch (e) {
      const errorCode = e.code
      setError(e.message)
      console.log(e.message)

       if (errorCode === 'auth/invalid-email') {
      setError('Invalid email address.');
    } else if (errorCode === 'auth/user-disabled') {
      setError('Your account has been disabled.');
    } else if (errorCode === 'auth/user-not-found') {
      setError('User not found.');
    } else if (errorCode === 'auth/wrong-password') {
      setError('Wrong password.');
    } else {
      setError(e.message);
    }
  }
    
  }
  return (
    <motion.div
     initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='w-screen h-screen'
    >
      <div className="aurora-outer w-screen h-screen">
        <div className="aurora-inner w-screen h-screen px-12 py-8 flex items-center justify-center">
          <Link to="/" className='w-[4rem] absolute top-10 left-10'>  <div className='space-x-4 text-xl text-white cursor-pointer w-[4rem] whitespace-nowrap'> <i className="fa-solid fa-chevron-left"></i> <span>Home</span></div></Link>
          <div className='bg-white rounded-xl w-[30rem] h-[35rem] flex  items-center flex-col py-6'>
            <h1 className='text-3xl font-semibold'>Welcome Back!</h1>
            <h2 className='font-light mt-4'>We missed you. Please Enter Your details</h2>
            <form onSubmit={handleSubmit} action="" className='space-y-4 w-[70%] mt-6 flex flex-col'>
              <label htmlFor="email"> <p className='font-bold text-md'>Email</p>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" name='email' placeholder='Enter Your Email' className='rounded-xl border border-gray-200 w-full px-6 py-3 outline-none'/>
              </label>
              <label htmlFor="password"> <p className='font-bold text-md'>Password</p>
                <input onChange={(e) => {
                  setPassword(e.target.value);
                }} type="password" name='password' placeholder='Enter Your Password' className='rounded-xl border border-gray-200 w-full px-6 py-3 outline-none'/>
              </label>
              <p className='text-red-500 font-semibold'>{error}</p>
              <div>
                <Link to={"/passwordreset"}>
                <label htmlFor="terms" className='flex  space-x-3 cursor-pointer '>
                   
                  <p className='font-light text-sm text-[#6375f0]'>Forgot Password ? </p>
                 
                </label>
                
                </Link>
                <button onClick={handleSubmit} className='w-full rounded-lg bg-[#6375f0] mt-6 text-xl text-white py-3 font-semibold hover:opacity-70 duration-700'>Sign In</button>
                <button  className='rounded-xl border border-gray-200 w-full px-6 py-3 flex items-center space-x-2 justify-center cursor-pointer mt-6' >
                  <img src={Glogo} alt="" className='w-[1.5rem]' />
                  <span>Continue with google</span>
                </button>
              </div>
            </form>
            <div className='w-full mt-6'>
              <p className='text-sm text-[#969BA0] text-center'>Don't have an account? <span className='text-[#5D6FF0] font-bold cursor-pointer'><Link to="/signup">Sign up</Link> </span> </p>
            </div>
        </div>
          
      </div>
     </div>
    </motion.div>
  )
}

export default Signin