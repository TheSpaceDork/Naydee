import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const PasswordReset = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { resetPassword } = UserAuth()
    const handleSubmit = async (e) => {
        e.preventDefault
        setError("")
        try {
            await resetPassword(email) 
            sessionStorage.setItem('email',email)
            navigate("/resetsuccess")
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
          <div className='bg-white rounded-xl w-[30rem] h-[20rem] flex  items-center flex-col py-6'>
            <h1 className='text-3xl font-semibold'>Hello!</h1>
            <h2 className='font-light mt-4'>Bummer, you forgot your password🙃</h2>
            <form onSubmit={handleSubmit}  action="" className='space-y-4 w-[70%] mt-6 flex flex-col'>
              <label htmlFor="email"> <p className='font-bold text-md'>Reset it here</p>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" name='email' placeholder='Enter Your Email' className='rounded-xl border border-gray-200 w-full px-6 py-3 outline-none'/>
              </label>
                          <p>{error }</p>
              <div>
              
                <div onClick={handleSubmit} className='w-full rounded-lg bg-[#6375f0] mt-6 text-xl text-white py-3 font-semibold hover:opacity-70 duration-700 flex items-center justify-center cursor-pointer'>Continue</div>
              
              </div>
            </form>
           
        </div>
          
      </div>
     </div>
    </motion.div>
  )
}

export default PasswordReset