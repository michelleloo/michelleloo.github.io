import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../projectState';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";
import { ProjectState } from '../projectState';

const Projects = () => {
    return (
        <h2>Hi</h2>
    )
};


const Details = styled(motion.div)`
    color:white;
`
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top:20vh;
    position:relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform:translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default Projects;