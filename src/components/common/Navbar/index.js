import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NightlightIcon from '@mui/icons-material/Nightlight';
import FlareIcon from '@mui/icons-material/Flare';
import Hamburger from './Drawer';
import { motion } from 'framer-motion';
import './style.css'

function Navbar() {
  const [dark, setDark] = useState(() => {
    let lastThemeSelected = localStorage.getItem('pageTheme');
    if (lastThemeSelected === 'dark') {
      return 'dark'
    }
    return 'light'
  });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);


  const navigate = useNavigate();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const controlNavbar = () => {
        if (typeof window !== 'undefined') {
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false);
          } else { // if scroll up show the navbar
            setShow(true);
          }

          // remember current page location to use in the next move
          setLastScrollY(window.scrollY);
        }
      };

      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const lastThemeSelected = localStorage.getItem('pageTheme');
  
  useEffect(() => {

    if (lastThemeSelected === 'dark') {
      setDarkTheme();
    }
    else {
      setLightTheme();
    }
  }, [lastThemeSelected])

  function setDarkTheme() {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('pageTheme', 'dark');
  }
  function setLightTheme() {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('pageTheme', 'light');
  }




  return (
    <motion.div
      className='navbar'
      style={{ translateY: show ? '0' : '-100%' }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
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
      <h1 className='logo' onClick={() => navigate('/home')} >S</h1>
      <div className='linkContainer'>
        <NavLink className='link' to={'/about'}>About</NavLink>
        <NavLink className='link' to={'/work'}>Work</NavLink>
        <NavLink className='link' to={'/contact'}>Contact</NavLink>
        {
          dark === 'dark' ?
            <FlareIcon className='sun' onClick={() => { setDark('light'); setLightTheme() }} />
            :
            <NightlightIcon className='moon' onClick={() => { setDark('dark'); setDarkTheme() }} />
        }
      </div>
      <div className='burgerMenu'>
        <Hamburger />
      </div>
    </motion.div>
  )
}

export default Navbar