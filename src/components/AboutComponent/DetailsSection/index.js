import React from "react";
import me from "../../../Assets/me.png";
import { motion } from 'framer-motion'
import './style.css'

function DetailsSection() {
    return (
        <div className="detailsContainer">
            <motion.div
                className="imageContainer"
                key={"imgContainer"}

                initial={{ opacity: 0, x: -90 }}
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
            >
                <img src={me} alt="Siddharth Hota" />
            </motion.div>
            <div className="aboutContainer">
                <motion.p className="aboutme"
                    key={"abtpara1"}
    
                    initial={{ opacity: 0, x: 90 }}
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
                >
                    Hello! My name is Siddharth, a passionate<span> Frontend Developer</span>,
                    javascript engineer and Illustrator from India. I enjoy creating
                    things that live on the internet. I spend my days (and often nights)
                    painting the Internet canvas, turning zeroes and ones into immersive, interactive experiences.
                </motion.p>

                <motion.p className="aboutme"
                key={"abtpara2"}

                initial={{ opacity: 0, x:90 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}>
                    I tread the path of minimalism, finding beauty in simplicity and order.
                    When I'm not on my computer, you can find me doing<span> photography</span>, designing &
                    creating illustrations, listening to old bollywod songs or podcasts.
                </motion.p>

                <motion.p
                    className="aboutme"
                    key={"listPara"}
    
                    initial={{ opacity: 0, x: 90 }}
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
                >
                    Here are a few technologies I've been working with recently:
                </motion.p>
                <ul>
                    <motion.div
                        key={"list1"}
        
                        initial={{ opacity: 0, x: 90 }}
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
                    >
                        <li><span>JavaScript (ES6+)</span></li>
                        <li><span>React</span></li>
                    </motion.div>
                    <motion.div
                        key={"list2"}
        
                        initial={{ opacity: 0, x: 90 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.8,
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        <li><span>CSS</span></li>
                        <li><span>Firebase</span></li>
                    </motion.div>
                </ul>
            </div>
        </div>
    );
}

export default DetailsSection;
