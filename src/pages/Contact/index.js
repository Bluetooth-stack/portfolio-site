import React from 'react'
import ContactDetails from '../../components/ContactComponent'
import { ToastContainer } from 'react-toastify'
import Footer from '../../components/common/Footer';
import Foot from '../../components/common/Footer/Foot';
import { motion } from 'framer-motion'
import Pagename from '../../components/common/Pagename';

function Contact() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Pagename pageName={'Contact'} />
      <ContactDetails />

      <div className="desktopFooter">
        <Footer />
      </div>
      <div className="mobFooter">
        <Foot />
      </div>
    </motion.div>
  )
}

export default Contact