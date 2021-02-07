import React from 'react';
import home1 from '../img/home1.jpg'

import styled from "styled-components";
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
                        <motion.h2 variants={titleAnim}>is <span>Michelle Loo</span> and <br />I am a</motion.h2>

                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Software Developer</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>I am a recent Computer Science and Business Administration graduate. I specialize in full stack and front-end development with an interest in ML and design.</motion.p>
                <Buttons>
                    <motion.button variants={fade}><a href="https://www.linkedin.com/in/michelle-loo/" target="_blank" rel="noreferrer" >LinkedIn</a></motion.button>
                    <motion.button variants={fade}><a href="https://github.com/michelleloo" target="_blank" rel="noreferrer">Github</a></motion.button>
                </Buttons>

            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    initial='hidden'
                    animate='show'
                    src={home1}
                    alt="Me"
                />
            </Image>
            <Wave />
        </About>
    );
}
const Buttons = styled.div`
    button{
        margin-left: 1rem;
        border-radius: 1rem;
    }    
    a{
        font-size: 15px;
        color:#23D997;
        text-decoration: none;

    }
    a:hover{color:#1a9b5d;}
`

export default AboutSection;