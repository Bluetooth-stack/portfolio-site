import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './style.css'

function Footer() {
    return (
        <motion.div
            className='footerContainer'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{
                duration: 0.3,
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
        >
            <Link to={'https://github.com/Bluetooth-stack'} target='_blank' rel="noreferrer" className='footer-icon'>
                <GitHubIcon  />
            </Link>
            <Link to={'https://www.linkedin.com/in/siddhartha-hota-2a5189209'} target='_blank' rel="noreferrer" className='footer-icon' >
                <LinkedInIcon  />
            </Link>
            <Link to={'https://www.instagram.com/s_i_dd_ha_rth/'} target='_blank' rel="noreferrer" className='footer-icon' >
                <InstagramIcon  />
            </Link>
        </motion.div>
    )
}

export default Footer