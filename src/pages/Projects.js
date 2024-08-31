import React, { useEffect } from 'react';
import styled from 'styled-components';

//Animation
import chatbot from '../img/chatbot.png';
import musicplayer from '../img/music-player.png';
import kaggle from '../img/kaggle.png';
import ckWebsite from '../img/CK-website.png';
import { motion } from 'framer-motion';
import { MainButton } from '../styles';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "../animation";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function redirectClick(url) {
        // do something meaningful, Promises, if/else, whatever, and then
        window.open(url, '_blank');
    }
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#1b1b1b" }}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>React Music Player</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Project>
                    <Hide>
                        <motion.p variants={fade}>Music is pulled from copyright free music. Purpose was to design simple UI that I could use when needed to focus.</motion.p>
                        <Buttons>
                            <MainButton variants={fade} onClick={() => redirectClick("https://github.com/michelleloo/react-player/")}>Code</MainButton>
                            <MainButton variants={fade} onClick={() => redirectClick("https://michelleloo.github.io/react-player/")}>Live</MainButton>
                        </Buttons>
                    </Hide>
                    <Hide>
                        <motion.img variants={photoAnim} src={musicplayer} alt="music player" />
                    </Hide>
                </Project>
                <motion.h2 variants={fade}>Acting/Music Personal Portfolio</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Project>
                    <Hide>
                        <motion.p variants={fade}>Personal acting website built for my cousin</motion.p>
                        <Buttons>
                            <MainButton variants={fade} onClick={() => redirectClick("https://www.christinakennedy.ca/")}>Live</MainButton>
                        </Buttons>
                    </Hide>
                    <Hide>
                        <motion.img variants={photoAnim} src={ckWebsite} alt="music player" />
                    </Hide>
                </Project>
                <motion.h2 variants={fade}>Consumption Prediction</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Project>
                    <Hide>
                        <motion.p variants={fade}>An AI Model built on Kaggle that tries to predict whether a student is an above average drinker.
                            Uses Pandas library & Sklearn's decision models
                            Also contains our own implementation of a linear regression model.</motion.p>
                        <Buttons>
                            <MainButton variants={fade} onClick={() => redirectClick("https://www.kaggle.com/syleehs/kernel0e566615e7/notebook")}>Code</MainButton>
                        </Buttons>
                    </Hide>
                    <Hide>
                        <motion.img variants={photoAnim} src={kaggle} alt="music player" />
                    </Hide>
                </Project>
                <motion.h2 variants={fade}>Schedule-It</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Project>
                    <Hide>
                        <motion.p>Node.JS chatbot built with the Microsoft Bot Framework. Used LUIS API to train NPL model and to converse with a chatbot to create appointments.</motion.p>
                        <Buttons>
                            <MainButton variants={fade} onClick={() => redirectClick("https://github.com/michelleloo/schedule-it")}>Code</MainButton>
                        </Buttons>
                    </Hide>
                    <Hide>
                        <motion.img variants={photoAnim} src={chatbot} alt="music player" />
                    </Hide>
                </Project>
            </Movie>
        </Work>

    );
};


const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
        font-size:30px;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #6680C8;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        object-fit:cover;
    }
    h2{
        color: #ffffff;
    }
`;
const Project = styled.div`    
    display:grid;
    grid-template-columns:  50% 50%;
    margin-bottom: 5rem;
    p{
        padding-right: 2rem;
    }
    @media (max-width: 700px){
        grid-template-columns: 100;
    } 
`
const Buttons = styled.div`
 
`
const Hide = styled.div`
    overflow:hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background:#17153B;
    z-index:2;
`;
const Frame2 = styled(Frame1)`
    background:#2E236C;
`;
const Frame3 = styled(Frame1)`
    background: #433D8B;
`;
const Frame4 = styled(Frame1)`
    background: #C8ACD6 
`;
export default Projects;