import React from 'react'
import Main from '../../components/HomeComponents'
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Foot from '../../components/common/Footer/Foot';
import { motion } from 'framer-motion'

function index() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <Navbar />

      <Main />
      
      <div className="desktopFooter">
        <Footer />
      </div>
      <div className="mobFooter">
        <Foot />
      </div>
    </motion.div>
  )
}

export default index