import React from 'react';
import AboutSection from '../components/AboutSection'

//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import WorkSection from '../components/WorkSection';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate="show" exit="exit">
            <AboutSection />
            <WorkSection />
        </motion.div>
    );
}
export default AboutUs;