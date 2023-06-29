import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { auth, googleProvider } from '../config/firebase'
import {UserAuth} from "../context/AuthContext.jsx"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import Glogo from "../assets/google-color-icon.svg"
const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  
  const  {createUser, googleSignIn} = UserAuth() 
  const signUp = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password, username)
      navigate('/')
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
  const createAccountWithGoogle = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate('/')
}catch (e) {
    console.log(e.message)
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
          <div className='bg-white rounded-xl w-[30rem] h-[41rem] flex  items-center flex-col py-6'>
            <h1 className='text-3xl font-semibold'>Hey There!</h1>
            <h2 className='font-light mt-4'>Create Your Account</h2>
            <form action="" className='space-y-4 w-[70%] mt-6 flex flex-col'>
              <label htmlFor="username"> <p className='font-bold text-md'>Username</p>
                <input onChange={(e) => setUsername(e.target.value)}
                  required
                  type="text"
                  name='username'
                  placeholder='Create a Username'
                  className='rounded-xl border border-gray-200 w-full px-6 py-3' />
              </label>
              <label htmlFor="email"> <p className='font-bold text-md'>Email</p>
                <input onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name='email'
                  placeholder='Enter Your Email'
                  className='rounded-xl border border-gray-200 w-full px-6 py-3' />
              </label>
              
              <label htmlFor="password"> <p className='font-bold text-md'>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} required type="password" name='password' placeholder='Enter Your Password' className='rounded-xl border border-gray-200 w-full px-6 py-3'/>
              </label>
              <p className='text-red-500 font-semibold'>{ error}</p>
              <div>
                <label htmlFor="terms" className='flex  space-x-3 cursor-pointer '>
                   <input type="checkbox" name="terms" id="terms" />
                  <p className='font-light text-sm'> I agree to the processing of Personal data</p>
                 
                </label>
                <button onClick={signUp} className='w-full rounded-lg bg-[#6375f0] mt-6 text-xl text-white py-3 font-semibold hover:opacity-70 duration-700'>Sign Up</button>
                <button onClick={createAccountWithGoogle} className='rounded-xl border border-gray-200 w-full px-6 py-3 flex items-center space-x-2 justify-center cursor-pointer mt-6' >
                  <img src={Glogo} alt="" className='w-[1.5rem]' />
                  <span>Sign Up with google</span>
                </button>
              </div>
            </form>
            <div className='w-full mt-6'>
              <p className='text-sm text-[#969BA0] text-center'>Already have an account? <span className='text-[#5D6FF0] font-bold cursor-pointer'><Link to="/signin">Sign In</Link> </span> </p>
            </div>
        </div>
          
      </div>
     </div>
    </motion.div>
  )
}

export default Signup