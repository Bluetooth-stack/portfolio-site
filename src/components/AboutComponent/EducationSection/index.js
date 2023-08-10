import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './style.css'
import EducationBox from './educationDiv';

function EducationDetails() {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
    }

    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
    }, [control, inView])

    return (
        <div className='eduContainer'>
            <motion.h2
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                viewport={{ once: true }}
                className='eduheading'>Education <span>.</span></motion.h2>

            <EducationBox
                classname={'pg timeLine'}
                university={'Utkal University, Bhubaneswar'}
                course={"Master's in Computer Application"}
                duration={'2020-2022'}
            />
            <EducationBox
                classname={'ug'}
                university={'Rajendra Auto. College, Balangir'}
                course={"Bachelor's in Science | Computer Science"}
                duration={'2017-2020'}
            />
            <EducationBox
                classname={'pg timeLine'}
                university={'Yuvodaya Jr. College, Balangir'}
                course={"Intermediates | Science"}
                duration={'2015-2017'}
            />
        </div>
    )
}

export default EducationDetails