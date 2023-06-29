import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ResetSuccess = () => {
  const email = sessionStorage.getItem('email')
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
            <h1 className='text-3xl font-semibold'>Success!</h1>
                      <h2 className='font-light mt-4 text-sm'>Reset Email sent to <span className='font-bold'>{email}</span> </h2>
          
                    
                      <i className="fa-sharp fa-solid fa-circle-check text-7xl mt-4 text-[#4BB543]"></i>
              <div>
                          <Link to={"/signin"}>
                <button  className='w-full rounded-lg bg-[#6375f0] mt-6 text-xl text-white py-3 px-3 font-semibold hover:opacity-70 duration-700'>Back to Sign In</button>
              
                          
                          </Link>
              </div>
    
           
        </div>
          
      </div>
     </div>
    </motion.div>
  )
}

export default ResetSuccess