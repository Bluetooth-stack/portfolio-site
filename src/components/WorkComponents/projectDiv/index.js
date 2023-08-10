import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'

function ProjectDiv({ thumbnail, pName, pInfo, techStack, gitrepo, pLink }) {
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
            className="project">
            <div className="imgContainer">
                <img src={thumbnail} alt="Crypto thumbnail" />
            </div>
            <div className="details">
                <h3 className="projName">{pName}</h3>
                <p className="projInfo">{pInfo}</p>
                <p className="techStack">
                    {
                        techStack &&
                        techStack.map((tech, ind) => (
                            <span key={ind}>{tech}</span>
                        ))
                    }
                </p>
                <div className="webLinkContainer">
                    <Link to={gitrepo} target='_blank' rel="noreferrer" className="linktoWeb">
                        <GitHubIcon className="toProjIcon" />
                    </Link>
                    <Link to={pLink}  target='_blank' rel="noreferrer" className="linktoWeb">
                        <OpenInNewIcon className="toProjIcon" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectDiv;
