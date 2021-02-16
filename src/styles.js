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
        padding: 0;
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
    @media (max-width: 700px){
        img{
            width: 60%;
        }
    } 
`;
export const Hide = styled.div`
    overflow: hidden;
`;
