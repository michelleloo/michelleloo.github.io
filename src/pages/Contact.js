import React from 'react';
import styled from 'styled-components';

import { About, Description, Image, Hide } from '../styles';
import linkedIn from "../img/linkedin.svg";
const Contact = () => {
    function redirectClick(url) {
        // do something meaningful, Promises, if/else, whatever, and then
        window.open(url, '_blank');
    }
    return (
        <div>
            <button><img src={linkedIn} alt="my image" onClick={() => redirectClick("https://www.linkedin.com/in/michelle-loo/")} style={{ background: "transparent" }} /></button>
        </div>
    );
};

export default Contact;