import React from 'react'
import WorkComponent from '../../components/WorkComponents'
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Foot from '../../components/common/Footer/Foot';
import { motion } from 'framer-motion'
import Pagename from '../../components/common/Pagename';

function Work() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <Navbar />

      <Pagename pageName={'Work'} />
      <WorkComponent />

      <div className="desktopFooter">
        <Footer />
      </div>
      <div className="mobFooter">
        <Foot />
      </div>
    </motion.div>
  )
}

export default Work