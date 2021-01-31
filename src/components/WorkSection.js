import React from 'react';

//Images
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//Styles 
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation'

//Animation
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

//Timeline
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const WorkSection = () => {
    const [element, controls] = useScroll();
    return (
        <Work>
            <Description>
                <motion.h2 variants={titleAnim}>Work History</motion.h2>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p>2021</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <motion.div className="icon" variants={fade}>
                                    <a href="https://www.schedulock.com/" target="_blank">Schedulock</a>
                                    <p>FullStack Developer</p>
                                    <p>React, Java Spring Framework</p>
                                </motion.div>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p>2020</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <div className="icon">
                                    <a href="https://www.schedulock.com/" target="_blank">Quadrical.Ai</a>
                                </div>
                                <p>Machine Learning Co-op</p>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p>2018</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <div className="icon">
                                    <a href="https://www.schedulock.com/" target="_blank" rel="noopener noreferrer">Magnet Forensics</a>
                                </div>
                                <p>Software Developer Co-op</p>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p>2017</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <div className="icon">
                                    <a href="https://www.schedulock.com/" target="_blank" rel="noopener noreferrer">CIBC Live Labs</a>
                                </div>
                                <p>Software Developer Co-op</p>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <div className="icon">
                                    <a href="https://www.schedulock.com/" target="_blank" rel="noopener noreferrer">The Co-operators</a>
                                </div>
                                <p>Software Developer Co-op</p>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Description>
        </Work>
    )
}

const Work = styled(About)`    
    align-items: flex-start;
`;
const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    @media (max-width: 1300px){
        justify-content: center;
    } 
`;
const Card = styled.div`
    flex-basis: auto;
    margin-bottom: 5rem;
    padding:2rem;
    border: solid #23D997;
    border-width: 1px;
    border-radius: 30px;
    .icon{
        align-items: center;
    a{
        font-size: 30px;
        margin-left: 1rem;
        color:#23D997;
        padding:1rem;
        border-bottom-color: coral;
        text-decoration: none;
    }
    a:hover{color:#1a9b5d;}
    }
    p{
        color:white;
        padding:1rem;
        margin-left:1rem;
        white-space: nowrap;
    }
    
`;
export default WorkSection;