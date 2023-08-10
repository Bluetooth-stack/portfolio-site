import React from 'react';
import { motion } from "framer-motion";
import crypto from '../../Assets/crypto.png';
import code from '../../Assets/&code.png';
import shop from '../../Assets/meshop.png';
import ProjectDiv from './projectDiv'
import './style.css'

function WorkComponent() {
    return (
        <div className='workContainer'>
            <motion.h2
                key={"workHead"}
                initial={{ opacity: 0, x: -80 }}
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
                className='workHeading'>Some Things I've Built <span>.</span></motion.h2>

            <ProjectDiv
                thumbnail={crypto}
                pName={"Crypto's"}
                pInfo={"Crypto's is a platform dedicated to crypto investors who want to get more information about the crypto currensies they are interested in to invest and compare them with other currencies available in market."}
                techStack={['React', 'Styled-component', 'CSS', 'Chart Js', 'Coingeko-API', 'Netlify']}
                gitrepo={'https://github.com/Bluetooth-stack/Crypto-currency-tracker'}
                pLink={'https://cryptos-track-your-crypto.netlify.app/'}
            />

            <ProjectDiv
                thumbnail={code}
                pName={'.&Code'}
                pInfo={".&Code is an desktop adaptive online compiler which can come handy to developers for some quick operation or tests as well as it can be quite helpful during any interview. It uses Monaco editor to power it up as an editor to give the best experience to the programmer while writing code."}
                techStack={['React', 'Styled-component', 'CSS', 'Judge0-API', 'Monaco', 'Netlify']}
                gitrepo={'https://github.com/Bluetooth-stack/online-compiler'}
                pLink={'https://and-code.netlify.app/'}
            />

            <ProjectDiv
                thumbnail={shop}
                pName={'MeShop.'}
                pInfo={"A interactive but desktop-adaptive dummy e-commerce website. There is no special requirements for accessing this website. It has most of the features that are available in any basic e-commerce website."}
                techStack={['HTML', 'CSS', 'JavaScript', 'Razorpay-API', 'Product-API']}
                gitrepo={'https://github.com/Bluetooth-stack/Me-Shop'}
                pLink={'https://bluetooth-stack.github.io/Me-Shop/'}
            />
        </div>
    )
}

export default WorkComponent