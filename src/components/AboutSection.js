import React from 'react';

//Stlyes
import { About, Description, Image, Hide } from '../styles';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from "./Wave";
const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Hi! My name</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>is <span>Michelle Loo</span> and I am a </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Software Developer</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>I am a recent Computer Science and Business Administration graduate. I specialize in full stack and front-end development with an interest in ML and design.</motion.p>
                <motion.button variants={fade}>LinkedIn</motion.button>
                <motion.button variants={fade}>Github</motion.button>
            </Description>
            <Wave />
        </About>
    );
}
export default AboutSection;