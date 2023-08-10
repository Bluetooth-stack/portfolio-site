import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FlareIcon from '@mui/icons-material/Flare';



export default function Hamburger() {
    const [state, setState] = useState(false);
    const [dark, setDark] = useState(() => {
        let lastThemeSelected = localStorage.getItem('pageTheme');
        if (lastThemeSelected === 'dark') {
            return 'dark'
        }
        return 'light'
    });

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
        <div className='burgerSlideList'>

            <Button size='small' onClick={() => { setState(true) }}> <MenuIcon className='menuIcon' /> </Button>
            <Drawer className='menuContainer' anchor={"right"} open={state}
                onClose={() => { setState(false) }}>

                <CloseIcon className='closeMenu' onClick={() => { setState(false) }} />
                <div className='menuList'>
                    <div className='themeSwitch'>
                        {
                            dark === 'dark' ?
                                <FlareIcon className='sun' onClick={() => { setDark('light'); setLightTheme() }} />
                                :
                                <NightlightIcon className='moon' onClick={() => { setDark('dark'); setDarkTheme() }} />
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
