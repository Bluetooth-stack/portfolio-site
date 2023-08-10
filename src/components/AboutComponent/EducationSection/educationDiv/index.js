import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function EducationBox({ classname, university, course, duration }) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 90 },
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
            <h3 className='university'>{university}</h3>
            <p>{course}</p>
            <p>{duration}</p>
        </motion.div>
    )
}

export default EducationBox