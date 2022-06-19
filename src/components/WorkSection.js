import React from 'react';

//Styles 
import { About, Description } from "../styles";
import styled from "styled-components";
import { useScroll } from './useScroll';

//Animation
import { motion } from 'framer-motion';
import { titleAnim, fade } from '../animation';

//Timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const WorkSection = () => {
    const [element, controls] = useScroll();
    return (
        <Work>
            <Description>
                <h2>Work History</h2>
                <TimelineDisplay>
                    <Timeline position="alternate">
                    <TimelineItem>
                            <TimelineOppositeContent>
                                <p>2021-2022</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Card>
                                    <div className="icon">
                                        <a href="https://rockportnetworks.com/" target="_blank" rel="noreferrer">Rockport Networks</a>
                                        <p>Frontend Developer</p>
                                        <p>Developed new features for ClojureScript web application</p>
                                    </div>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
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
                                    <div className="icon">
                                        <a href="https://www.schedulock.com/" target="_blank" rel="noreferrer">Schedulock</a>
                                        <p>Full Stack Developer</p>
                                        <p>Developed new features for React Website. Back End features built with JavaSpring Framework</p>
                                    </div>
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
                                        <a href="https://www.quadrical.ai/" target="_blank" rel="noreferrer">Quadrical.Ai</a>
                                    </div>
                                    <p>Machine Learning Co-op</p>
                                    <p>Created an Machine Learning model using Neural Networks to build Andriod Application. </p>
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
                                        <a href="https://www.magnetforensics.com/" target="_blank" rel="noreferrer">Magnet Forensics</a>
                                    </div>
                                    <p>Software Developer Co-op</p>
                                    <p>Worked in Data Science team to train image recognition model. Built MongoDB store to classify and store images.</p>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>2018</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Card>
                                    <div className="icon">
                                        <a href="https://www.cibc.com/en/personal-banking.html/" target="_blank" rel="noreferrer">CIBC Live Labs</a>
                                    </div>
                                    <p>Software Developer Co-op</p>
                                    <p>Developed mobile application for office room bookings</p>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="secondary" variant="outlined" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Card>
                                    <div className="icon">
                                        <a href="https://www.cooperators.ca/" target="_blank" rel="noreferrer">The Co-operators</a>
                                    </div>
                                    <p>Software Developer Co-op</p>
                                    <p>Developed chatbot using the Microsoft Bot Framework to replicate insurance claims</p>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline></TimelineDisplay>
                <Cards>
                    <Card>
                        <div className="icon">
                            <h3>Rockport Networks</h3>
                        </div>
                        <p>Frontend Developer</p>
                        <p>Developed new features for ClojureScript web application</p>

                    </Card>
                    <Card>
                        <div className="icon">
                            <h3>Schedulock</h3>
                        </div>
                        <p>Full Stack Developer</p>
                        <p>Developed new features for React Website. Back End features built with JavaSpring Framework</p>

                    </Card>
                    <Card>
                        <div className="icon">
                            <h3>Quadrical.Ai</h3>
                        </div>
                        <p>Machine Learning Coop</p>
                        <p>Created an Machine Learning model using Neural Networks to build Andriod Application.</p>

                    </Card>
                    <Card>
                        <div className="icon">
                            <h3>Magnet Forensics</h3>
                        </div>
                        <p>Software Developer Co-op</p>
                        <p>Worked in Data Science team to train image recognition model. Built MongoDB store to classify and store images.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <h3>CIBC Live Labs</h3>
                        </div>
                        <p>Software Developer Co-op</p>
                        <p>Developed mobile application for office room bookings</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <h3>The Co-operators</h3>
                        </div>
                        <p>Software Developer Co-op</p>
                        <p>Developed chatbot using the Microsoft Bot Framework to replicate insurance claims</p>
                    </Card>
                </Cards>
            </Description>
        </Work>
    )
}

const Cards = styled.div`
    margin-top:6rem;
    flex-wrap:wrap;
    flex-direction:column;
    visibility:hidden;
    display:None;
    @media (max-width: 1300px){
        visibility: visible;
        display:flex;
        
    } 
`;
const TimelineDisplay = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    visibility:visible;
    @media (max-width: 1300px){
        display:None;
    } 
`;
const Work = styled(About)`    
    align-items: flex-start;
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
    }
    p{
        color:white;
        padding:1rem;
        margin-left:1rem;
        white-space: wrap;
    }
    h3{
        font-size: 1.5rem;
    }
`;
export default WorkSection;