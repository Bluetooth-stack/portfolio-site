import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FlareIcon from '@mui/icons-material/Flare';



export default function Hamburger() {
    const [state, setState] = useState(false);
    const [dark, setDark] = useState(true);
    const setDarkTheme = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        setDark(true)
    }

    const setLightTheme = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        setDark(false)
    }


    return (
        <div className='burgerSlideList'>

            <Button size='small' onClick={() => { setState(true) }}> <MenuIcon className='menuIcon' /> </Button>
            <Drawer className='menuContainer' anchor={"right"} open={state}
                onClose={() => { setState(false) }}>

                <CloseIcon className='closeMenu' onClick={() => { setState(false) }} />
                <div className='menuList'>
                    <div className='themeSwitch'>
                        {
                            dark ?
                                <FlareIcon className='sun' onClick={() => { setLightTheme() }} />
                                :
                                <NightlightIcon className='moon' onClick={() => { setDarkTheme() }} />
                        }
                    </div>

                    <NavLink className='drawerlink' to='/about'>About</NavLink>
                    <NavLink className='drawerlink' to='/work'>Work</NavLink>
                    <NavLink className='drawerlink' to='/contact'>Contact</NavLink>
                </div>

            </Drawer>
        </div>
    );
}
