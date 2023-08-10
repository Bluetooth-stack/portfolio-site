import React from "react";
import { motion } from 'framer-motion'
import "./style.css";
import Pagename from "../common/Pagename";
import EastIcon from '@mui/icons-material/East';

function Main() {
    return (
        <div className="homeContainer">
            <Pagename pageName={'Home'} />
            <motion.p
                className="head"
                key={"head"}
               
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
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
            >Hey, my name is</motion.p>
            <motion.div
                className="name"
                key={"name"}
               
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 30 }}
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
            >
                <h2>Siddharth Hota</h2>
                <h2>Siddharth Hota</h2>
            </motion.div>
            <motion.h3
                className="imTag"
                key={"intag"}
               
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: -30 }}
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
            >I Build things for the web!</motion.h3>
            <motion.p
                className="aboutTag"
                key={"aboutTag"}
               
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
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
            >
                I'm Your friendly neighborhood frontend developer, JavaScript engineer & Illustrator.
                I spend my days (and often nights) painting the
                Internet canvas with PROJECTS and lines of code, turning zeroes and ones
                into immersive, interactive experiences.
            </motion.p>
            <motion.a
            className="toAboutLink"
            key={"toAboutLink"}
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 1,
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            href='/about'>See More About Me <span className="arrowEast"> <EastIcon size='small' /></span></motion.a>

        </div>
    );
}

export default Main;
