import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function FirstPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home')
        }, 2500)
    },[navigate])
  return (
    <motion.div
    initial={{scale:0.6}}
    animate={{scale:1}}
    exit={{scale:0.6}}
    className='firstPage'>

        <h1 className='firstPageLogo'>S</h1>
        
    </motion.div>
  )
}

export default FirstPage