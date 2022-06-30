import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    function redirectClick(url) {
        // do something meaningful, Promises, if/else, whatever, and then
        window.open(url, '_blank');
    }
    return (
        <Outer>
            <Inner>
                <h3>I'd love to hear from you. Send me a message via <a href="https://www.linkedin.com/in/michelle-loo/" target="_blank" rel="noreferrer">LinkedIn</a></h3>
            </Inner>
        </Outer>
    );
};
const Outer = styled.div`
    display:flex;

`
const Inner = styled.div`    
    margin: 5rem;
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 50px;
        color: white;
        text-align: center;

    }
    a{
        border-radius: 1rem;
        color:#23D997;
        text-decoration: none;
        font-size: 50px;
    }    
    a:hover{
        color:#1a9b5d;
    }  
`
export default Contact;