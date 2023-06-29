import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Home from '../pages/Home';
import CreatePost from '../pages/CreatePost';
import { AuthContextProvider } from '../context/AuthContext'
import PasswordReset from '../pages/PasswordReset';
import ResetSuccess from '../pages/ResetSuccess';

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
     <AuthContextProvider>
       <Routes location={location} key={location.pathname}>
              <Route exact path ="/" element={<Home/>}/>
              <Route exact path="/signin" element={ <Signin/> }/>
              <Route exact path="/signup" element={ <Signup/> }/>
          <Route exact path="/createpost" element={<CreatePost />} />
          <Route exact path="/passwordreset" element={<PasswordReset />} />
          <Route exact path="/resetsuccess" element={<ResetSuccess />} />
          
        </Routes>
      </AuthContextProvider>
         
      </AnimatePresence>
  )
}

export default AnimatedRoutes