import React from 'react'
import Footer from '../../components/common/Footer';
import Foot from '../../components/common/Footer/Foot';
import Pagename from '../../components/common/Pagename'
import DetailsSection from '../../components/AboutComponent/DetailsSection'
import EducationDetails from '../../components//AboutComponent/EducationSection'
import ExperienceSection from '../../components/AboutComponent/ExperienceSection'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >

      <Pagename pageName={'About'} />
      <DetailsSection />
      <EducationDetails />
      <ExperienceSection />
      
      <div className="desktopFooter">
        <Footer />
      </div>
      <div className="mobFooter">
        <Foot />
      </div>
    </motion.div>
  )
}

export default About