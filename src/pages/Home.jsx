import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <motion.div
      initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.5}}
      >
          <Navbar />
         
    </motion.div>
  )
}

export default Home