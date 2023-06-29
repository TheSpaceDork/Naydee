import { onAuthStateChanged } from 'firebase/auth'
import {React, useRef} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { UserAuth } from '../context/AuthContext'

 
const Navbar = () => {
    
    const { user, logout } = UserAuth()
    
    const navRef = useRef()
    const openNav = () => {
    navRef.current.classList.toggle("navOpen")
    }
    const handleLogout = async () => {
        try {
            await logout()
            openNav()
        } catch (e) {
            console.log(e.message)
   }
    }
   
  return (
      <nav className='bg-[#F7F7F7] w-full h-[5rem] px-8 py-4 flex items-center justify-between relative'>
          <div>
              <h1 className='text-[#272727] text-3xl'> <span className='font-bold'>N</span>aydee</h1>
          </div>
          {/* search input div */}
          <div className='shadow-lg rounded-md px-5 py-3 bg-white flex items-center justify-between w-[30rem]'>
              <input type="text" placeholder='Search...' className="bg-inherit outline-none border-none w-[90%]" />
              <div><i className="fa-solid fa-magnifying-glass"></i></div>
          </div>
          {/* profile and burger menu div */}
          <div className='flex items-center  space-x-5'>
              
          {  user ?   <div className='rounded-full bg-white w-8 h-8 cursor-pointer overflow-hidden'>
                  <img src={user?.photoURL} alt="" className='object-contain ' />
           </div>  :
              <Link to={"/signin"}>
               <div className='rounded-lg bg-white shadow-sm px-3 py-2 duration-700 hover:text-white ease-in-out font-semibold cursor-pointer relative group overflow-hidden'>
                  <p className='text-transparent'>Sign in</p>
                  <div className='absolute w-0 bg-[#272727] top-0 left-0 right-0 bottom-0 duration-700 ease-in-out group-hover:w-full text-white'></div>
                  <div className='absolute w-full bg-transparent top-0 left-0 right-0 bottom-0 group-hover:text-white duration-700 px-3 py-2 whitespace-nowrap'>Sign In</div>
              </div>
              </Link>}
             
              <div onClick={openNav } className="cursor-pointer"><i className="fa-solid fa-bars"></i></div>
              <div ref={navRef} className='-right-[40rem] fixed top-[5rem] bottom-0 h-[30rem] w-[20rem] bg-[#F7F7F7]  bg-opacity-70 backdrop-blur-lg  flex items-center py-8 flex-col duration-700 ease-in-out '>
                  <div className='rounded-full bg-white w-16 h-16 cursor-pointer overflow-hidden'>
                  <img src={user?.photoURL} alt="" className='object-contain ' />
           </div>
                  <button onClick={handleLogout} className='bg-red-400 text-white font-semibold h-8 rounded-md absolute bottom-8 left-8 px-4 text-lg'>Logout</button>
              </div>
          </div>
    </nav>
  )
}

export default Navbar