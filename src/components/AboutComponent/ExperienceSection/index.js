import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './style.css'
import resume from '../../../Assets/Siddharth_Hota_resume.pdf'
import ExperienceDiv from './expDiv';
import EastIcon from '@mui/icons-material/East';

function ExperienceSection() {
    const control = useAnimation()
    const control1 = useAnimation()
    const [ref, inView] = useInView()
    const [ref2, inView2] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.6 },
    }

    const linkVarient = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -80 },
    }

    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
    }, [control, inView])

    useEffect(() => {
        console.log(inView2);
        if (inView2) {
            control1.start('visible')
        }
    }, [control1, inView2])

    return (
        <div className='expContainer'>
            <motion.h2
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                viewport={{ once: true }}
                className='expheading'>Experience <span>.</span></motion.h2>

            <ExperienceDiv
                classname={'expdiv'}
                institute={'StartBlocks International'}
                position={'Graphics Designer Intern'}
                duration={' Feb-Apr 2022 (Remote)'}
                techStack={'Adobe Illustrator | MS Powerpoint'}
                desc1={' Designed illustrations for ad and presentations that increases content quality.'}
                desc2={'Collaborated with sales & marketing team to create presentations that helps them represent their product & increase sales by 15%.'}
                desc3={'Managed and improved existing templates to match the current design that helped in design consistency.'}
            />

            <motion.a
                className="toResumeLink"
                key={"toResumeLink"}
                ref={ref2}
                variants={linkVarient}
                initial="hidden"
                animate={control1}
                viewport={{ once: true }}
                href={resume} target='_blank'>View Resume <span className="arrowEast"> <EastIcon size='small' /></span></motion.a>
        </div>
    )
}

export default ExperienceSection