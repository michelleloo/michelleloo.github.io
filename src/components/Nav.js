import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
/*                 */
const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Michelle Loo</Link></h1>
            <ul>
                <li>
                    <Link to="/">About</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "100%" : "0%" }} />
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/projects" ? "100%" : "0%" }} />

                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/contact" ? "100%" : "0%" }} />
                </li>

                <li>
                    <Link to="/blog">Blog</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/blog" ? "100%" : "0%" }} />
                </li>

            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items:center;
    padding:1rem 10rem;
    background-color: #282828;
    position:sticky;
    top:0;
    z-index:10;


    a{
        color:white;
        text-decoration: none;
    }
    ul{
        display:flex;
        list-style:none;
    }
    #logo{
        font-size: 1.8rem;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
        
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding:2rem 2rem;
        #logo{
            display:inline-block;
            margin: 1rem;
        }
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%
        }
        li{
            padding:0;

        }
    }
`;
const Line = styled(motion.div)`
    height:0.3rem;
    background: #23d997;
    width: 0%;
    margin-top: 0.5rem;

`;
export default Nav;