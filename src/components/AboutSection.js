import React, { useEffect } from 'react';

import home1 from '../img/home1.jpg'

import styled from "styled-components";
//Stlyes
import { About, Description, Image, Hide, MainButton } from '../styles';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from "./Wave";
const AboutSection = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    function redirectClick(url) {
        // do something meaningful, Promises, if/else, whatever, and then
        window.open(url, '_blank');
    }
    return (
        <About>
            <Description>
                <Title>

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
                    <motion.p variants={fade}>I am a Frontend developer based in Ontario, Canada. Currently I am using React and Redux with Typescript. When i'm not coding you can usually find me golfing, crocheting or climbing!</motion.p>
                </Title>
                <Buttons>
                    <MainButton variants={fade} onClick={() => redirectClick("https://www.linkedin.com/in/michelle-loo/")}>LinkedIn</MainButton>
                    <MainButton variants={fade} onClick={() => redirectClick("https://github.com/michelleloo")}>Github</MainButton>
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
const Title = styled.div`
    @media (max-width: 700px){
        h2{
            font-size: 20px;
        }
        p{
            font-size: 15px;
            padding: 3rem 0rem;
        }
    } 
    p{
        padding: 3rem 0rem 4rem 0rem;; 
        line-height: 48px;
    }
    
`;
const Buttons = styled.div`
`

export default AboutSection;