import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

function ContactDetails() {
  const formref = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templetId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_EMAILJS_API_KEY

  function sendMail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templetId, formref.current, apiKey)
      .then((result) => {
        console.log(result.text);
        toast.success('Message Sent Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Something went wrong!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    e.target.reset();
  }

  return (
    <div className='contactContainer'>
      <motion.h2
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className='contactHeading'>Connect <span>.</span></motion.h2>

      <motion.p
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className='contactPara'>
        My inbox is always open, whether you have a question or just want to say hi.
        Get in touch or shoot me an email directly on <span>siddharthhota24@gmail.com</span>  !
      </motion.p>

      <form ref={formref} onSubmit={sendMail} className='formControl'>

        <motion.input
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0,
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          type='text' placeholder='Your Name' name='Sender-name' required />

        <motion.input
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          type='email' placeholder='Your E-mail' name='Sender-mail' required />

        <motion.input
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          type='text' placeholder='Subject' name='Subject' required />

        <motion.textarea
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          placeholder='Message' name='message' cols={40} rows={10}></motion.textarea>

        <motion.button
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          type='submit'>Send Message</motion.button>
      </form>
    </div>
  )
}

export default ContactDetails