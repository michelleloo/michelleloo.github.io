import React from 'react';

//Images
import money from '../img/money.svg';
//Styles 
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation'

const WorkSection = () => {
    const [element, controls] = useScroll();
    return (
        <Work>

            <Description>
                <h2>Work History</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Quadrical.Ai</h3>
                        </div>
                        <p>Machine Learning Coop</p>

                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Magnet Forensics</h3>
                        </div>
                        <p>Software Developer Co-op</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>CIBC</h3>
                        </div>

                        <p>Software Developer Co-op</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>The Co-operators</h3>
                        </div>
                        <p>Software Developer Co-op</p>
                    </Card>
                </Cards>
            </Description>
        </Work>
    )
}


const Work = styled(About)`    
    flex-direction:column;
    h2{
        padding-bottom: 5rem;
        text-align: left;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
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
    flex-basis: 5rem;
    .icon{
        display:flex;
        align-items: center;
    h3{
        margin-left: 1rem;
        color:white;
        padding:1rem;
        text-decoration: underline;

    }}
    p{
        color:white;
        padding:1rem;
        margin-left:1rem;
        white-space: pre-wrap;

    }
    
`;

export default WorkSection;