import styled from "styled-components";
import { motion } from 'framer-motion';

//Styled Components
export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 1300px){
        display:block;
        padding: 2rem 2rem;
    }
    
`;
export const Description = styled.div`
    flex:1;
    padding-right: 5rem;
    z-index:2;
    h2{
        font-weight: lighter;
    }
    @media (max-width: 1300px){
    padding-right: 0rem;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    } 
`;

export const Image = styled.div`
    flex:1;
    overflow: hidden;
    z-index:2;
    margin-left: 2rem;
    img{
        width: 100%;
        height: auto;
        filter: grayscale(30%);
        filter: contrast(100%);
        object-fit: cover;
        border-radius: 30%;
        
    }

`;
export const Hide = styled.div`
    overflow: hidden;
`;

export const MainButton = styled(motion.button)`
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #6680C8;
    background: transparent;
    color: #6680C8;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    border-radius: 1rem;
    font-size: 15px;
    width: 10rem;
    margin:1rem;
    &:hover{
        background-color: #6680C8;
        color: black;
        border: 3px solid black;
    };

`;
