import React, { useState, useEffect } from 'react';
import AboutSection from '../components/AboutSection'
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import WorkSection from '../components/WorkSection';
import Arrow from '../img/arrow-up-simple-svgrepo-com.svg';

const AboutUs = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        setVisible(false)
    }, []);

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate="show" exit="exit">
            <AboutSection />
            <WorkSection />
            <UpButton
                onClick={() => scrollToTop()}
                style={{ display: visible ? 'inline' : 'none' }}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 16L12 8L4 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </UpButton>

        </motion.div>
    );
}
export default AboutUs;

const UpButton = styled.button`
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #23d997;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
        background-color: #00CB8A;}
`;

