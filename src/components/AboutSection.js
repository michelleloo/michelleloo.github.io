import React from 'react';
import { Link } from 'react-router-dom'

import home1 from '../img/home1.jpg'

import styled from "styled-components";
//Stlyes
import { About, Description, Image, Hide } from '../styles';

import { useHistory } from 'react-router-dom';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from "./Wave";
const AboutSection = (props) => {
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
                    <motion.p variants={fade}>I am a recent Computer Science and Business Administration graduate. I am interested in full stack development with an interest in ML.</motion.p>
                </Title>
                <Buttons>
                    <motion.button variants={fade} onClick={() => redirectClick("https://www.linkedin.com/in/michelle-loo/")}>LinkedIn</motion.button>
                    <motion.button variants={fade} onClick={() => redirectClick("https://github.com/michelleloo")}>Github</motion.button>
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
        }
    } 
`;
const Buttons = styled.div`
    button{
        width: 10rem;
        margin-left: 1rem;
        border-radius: 1rem;
        font-size: 15px;
        color:#23D997;
        text-decoration: none;
    }
    button:hover{
        color:#1a9b5d;
    }    
`

export default AboutSection;