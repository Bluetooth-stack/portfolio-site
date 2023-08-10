import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ExperienceDiv({ classname, institute, position, duration, techStack, desc1, desc2, desc3 }) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    }

    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
    }, [control, inView])

    return (
        <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            viewport={{ once: true }}
            className={classname}>
            <h3 className='institute'>{position} <span>@ {institute}</span> </h3>
            <p>{duration}</p>
            <p>{techStack}</p>
            <ul>
                <li><span>{desc1}</span></li>
                <li><span>{desc2}</span></li>
                <li><span>{desc3}</span></li>
            </ul>
        </motion.div>
    )
}

export default ExperienceDiv