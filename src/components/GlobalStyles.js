import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        @media (max-width:1700px){
            font-size: 80%;
        };
    }
    
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x:hidden;
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color:white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight:bold;
        color:#6680C8;
        font-weight: bold;
    }
    p{
        color: #ccc;
        font-size:1.4rem;
        line-height: 150%;
    }
`
export default GlobalStyle;