(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),c=t.n(r),a=t(30),o=t.n(a),s=t(5),d=t(6);function j(){var n=Object(s.a)(["\n    *{\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n    }\n    html{\n        @media (max-width:1700px){\n            font-size: 80%;\n        };\n    }\n    \n    body{\n        background: #1b1b1b;\n        font-family: 'Inter', sans-serif;\n        overflow-x:hidden;\n    }\n    button{\n        font-weight: bold;\n        font-size: 1.1.rem;\n        cursor: pointer;\n        padding: 1rem 2rem;\n        border: 3px solid #23d997;\n        background: transparent;\n        color: white;\n        transition: all 0.5s ease;\n        font-family: 'Inter', sans-serif;\n\n        &:hover{\n            background-color: #23d007;\n            color:white;\n        };\n    }\n    h2{\n        font-weight: lighter;\n        font-size: 4rem;\n    }\n    h3{\n        color:white;\n    }\n    h4{\n        font-weight: bold;\n        font-size: 2rem;\n    }\n    a{\n        font-size: 1.1rem;\n    }\n    span{\n        font-weight:bold;\n        color:#23d997;\n        font-weight: bold;\n    }\n    p{\n        padding: 3rem 0rem;\n        color: #ccc;\n        font-size:1.4rem;\n        line-height: 150%;\n    }\n"]);return j=function(){return n},n}var l=Object(d.a)(j()),b=t(10),h=t(3),x=t(7);function O(){var n=Object(s.a)(["\n    height:0.3rem;\n    background: #23d997;\n    width: 0%;\n    position: absolute;\n    bottom: -80%;\n    left: 60%;\n"]);return O=function(){return n},n}function u(){var n=Object(s.a)(['\n    min-height: 10vh;\n    display: flex;\n    margin:auto;\n    justify-content: space-between;\n    align-items:center;\n    padding:1rem 10rem;\n    background-color: #282828;\n    position:sticky;\n    top:0;\n    z-index:10;\n\n\n    a{\n        color:white;\n        text-decoration: none;\n    }\n    ul{\n        display:flex;\n        list-style:none;\n    }\n    #logo{\n        font-size: 1.8rem;\n        font-family: "Lobster", cursive;\n        font-weight: lighter;\n    }\n    li{\n        padding-left: 10rem;\n        position: relative;\n        \n    }\n    @media (max-width: 1300px){\n        flex-direction: column;\n        padding:2rem 2rem;\n        #logo{\n            display:inline-block;\n            margin: 1rem;\n        }\n        ul{\n            padding: 2rem;\n            justify-content: space-around;\n            width: 100%\n        }\n        li{\n            padding:0;\n\n        }\n    }\n']);return u=function(){return n},n}var p=d.b.nav(u()),f=Object(d.b)(h.b.div)(O()),m=function(){var n=Object(x.f)().pathname;return Object(i.jsxs)(p,{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(b.c,{id:"logo",to:"/",children:"Michelle Loo"})}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(b.c,{to:"/",children:"1. About"}),Object(i.jsx)(f,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/"===n?"50%":"0%"}})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(b.c,{to:"/projects",children:" 2. My Projects"}),Object(i.jsx)(f,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/projects"===n?"50%":"0%"}})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(b.c,{to:"/contact",children:"3. Contact"}),Object(i.jsx)(f,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/contact"===n?"50%":"0%"}})]})]})]})},v=t.p+"static/media/home1.c5ae0288.jpg";function g(){var n=Object(s.a)(["\n    overflow: hidden;\n"]);return g=function(){return n},n}function w(){var n=Object(s.a)(["\n    flex:1;\n    overflow: hidden;\n    z-index:2;\n    margin-left: 2rem;\n    img{\n        width: 100%;\n        height: auto;\n        filter: grayscale(30%);\n        filter: contrast(100%);\n        object-fit: cover;\n        border-radius: 20%;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n    flex:1;\n    padding-right: 5rem;\n    z-index:2;\n    h2{\n        font-weight: lighter;\n    }\n    @media (max-width: 1300px){\n        padding: 0;\n        button{\n            margin: 2rem 0rem 5rem 0rem;\n        }\n    } \n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n    min-height: 90vh;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5rem 10rem;\n    color: white;\n    @media (max-width: 1300px){\n        display:block;\n    }\n    \n"]);return k=function(){return n},n}var C=Object(d.b)(h.b.div)(k()),z=d.b.div(y()),D=d.b.div(w()),N=d.b.div(g()),M={hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:.25,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.25}}},L={hidden:{y:200},show:{y:0,transition:{duration:.75,ease:"easeOut"}}},S={hidden:{opacity:0},show:{opacity:1,transition:{ease:"easeOut",duration:1}}},I={hidden:{scale:1.5,opacity:0},show:{scale:1,opacity:1,transition:{ease:"easeOut",duration:.75}}},B={hidden:{width:"0%"},show:{width:"100%",transition:{duration:1}}},A={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{ease:"easeOut",duration:.5}}},F={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:.11,ease:"easeOut"}}};function T(){var n=Object(s.a)(["\n    position: absolute;\n    left:0;\n    z-index:1;\n\n"]);return T=function(){return n},n}var _=d.b.svg(T()),P=function(){return Object(i.jsx)(_,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)(h.b.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0},transition:{duration:1},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#D96ED4",strokeOpacity:"0.1",strokeWidth:"10"})})};function W(){var n=Object(s.a)(["\n    button{\n        width: 10rem;\n        margin-left: 1rem;\n        border-radius: 1rem;\n    }    \n    a{\n        font-size: 15px;\n        color:#23D997;\n        text-decoration: none;\n\n    }\n    a:hover{color:#1a9b5d;}\n"]);return W=function(){return n},n}function E(){var n=Object(s.a)(["\n    @media (max-width: 700px){\n        h2{\n            font-size: 20px;\n        }\n        p{\n            font-size: 15px;\n        }\n    } \n"]);return E=function(){return n},n}var J=d.b.div(E()),R=d.b.div(W()),G=function(){return Object(i.jsxs)(C,{children:[Object(i.jsxs)(z,{children:[Object(i.jsxs)(J,{children:[Object(i.jsxs)(h.b.div,{children:[Object(i.jsx)(N,{children:Object(i.jsx)(h.b.h2,{variants:L,children:"Hi! My name"})}),Object(i.jsx)(N,{children:Object(i.jsxs)(h.b.h2,{variants:L,children:["is ",Object(i.jsx)("span",{children:"Michelle Loo"})," and ",Object(i.jsx)("br",{}),"I am a"]})}),Object(i.jsx)(N,{children:Object(i.jsx)(h.b.h2,{variants:L,children:"Software Developer"})})]}),Object(i.jsx)(h.b.p,{variants:S,children:"I am a recent Computer Science and Business Administration graduate. I specialize in full stack and front-end development with an interest in ML and design."})]}),Object(i.jsxs)(R,{children:[Object(i.jsx)(h.b.button,{variants:S,children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/michelle-loo/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(i.jsx)(h.b.button,{variants:S,children:Object(i.jsx)("a",{href:"https://github.com/michelleloo",target:"_blank",rel:"noreferrer",children:"Github"})})]})]}),Object(i.jsx)(D,{children:Object(i.jsx)(h.b.img,{variants:I,initial:"hidden",animate:"show",src:v,alt:"Me"})}),Object(i.jsx)(P,{})]})},H=t(24),Q=t(34),q=t(66),K=t(72),U=t(68),V=t(70),X=t(71),Y=t(69),Z=t(67);function $(){var n=Object(s.a)(["\n    flex-basis: auto;\n    margin-bottom: 5rem;\n    padding:2rem;\n    border: solid #23D997;\n    border-width: 1px;\n    border-radius: 30px;\n    .icon{\n        align-items: center;\n    a{\n        font-size: 30px;\n        margin-left: 1rem;\n        color:#23D997;\n        padding:1rem;\n        border-bottom-color: coral;\n        text-decoration: none;\n\n    }\n    a:hover{color:#1a9b5d;}\n    }\n    p{\n        color:white;\n        padding:1rem;\n        margin-left:1rem;\n        white-space: wrap;\n         @media (max-width:1900px){\n            \n        };\n    }\n    \n"]);return $=function(){return n},n}function nn(){var n=Object(s.a)(["    \n    align-items: flex-start;\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n    display:flex;\n    flex-wrap:wrap;\n    flex-direction:column;\n    visibility:visible;\n    @media (max-width: 1300px){\n        display:None;\n    } \n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n    margin-top:6rem;\n    flex-wrap:wrap;\n    flex-direction:column;\n    visibility:hidden;\n    display:None;\n    @media (max-width: 1300px){\n        visibility: visible;\n        display:flex;\n    } \n"]);return tn=function(){return n},n}var rn=d.b.div(tn()),cn=d.b.div(en()),an=Object(d.b)(C)(nn()),on=d.b.div($()),sn=function(){var n=function(){var n=Object(h.c)(),e=Object(Q.a)({threshold:.5}),t=Object(H.a)(e,2),i=t[0];return t[1]?n.start("show"):n.start("hidden"),[i,n]}(),e=Object(H.a)(n,2);e[0],e[1];return Object(i.jsx)(an,{children:Object(i.jsxs)(z,{children:[Object(i.jsx)("h2",{children:"Work History"}),Object(i.jsx)(cn,{children:Object(i.jsxs)(q.a,{align:"alternate",children:[Object(i.jsxs)(K.a,{children:[Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:"2021"})}),Object(i.jsxs)(U.a,{children:[Object(i.jsx)(Y.a,{color:"secondary",variant:"outlined"}),Object(i.jsx)(V.a,{})]}),Object(i.jsx)(X.a,{children:Object(i.jsx)(on,{children:Object(i.jsxs)("div",{className:"icon",children:[Object(i.jsx)("a",{href:"https://www.schedulock.com/",target:"_blank",rel:"noreferrer",children:"Schedulock"}),Object(i.jsx)("p",{children:"FullStack Developer"}),Object(i.jsx)("p",{children:"Developed new features for React Website. Implemented API  in Java Spring Framework"})]})})})]}),Object(i.jsxs)(K.a,{children:[Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:"2020"})}),Object(i.jsxs)(U.a,{children:[Object(i.jsx)(Y.a,{color:"primary",variant:"outlined"}),Object(i.jsx)(V.a,{})]}),Object(i.jsx)(X.a,{children:Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("a",{href:"https://www.quadrical.ai/",target:"_blank",rel:"noreferrer",children:"Quadrical.Ai"})}),Object(i.jsx)("p",{children:"Machine Learning Co-op"}),Object(i.jsx)("p",{children:"Created an Machine Learning model using Neural Networks to build Andriod Application. "})]})})]}),Object(i.jsxs)(K.a,{children:[Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:"2018"})}),Object(i.jsxs)(U.a,{children:[Object(i.jsx)(Y.a,{color:"secondary",variant:"outlined"}),Object(i.jsx)(V.a,{})]}),Object(i.jsx)(X.a,{children:Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("a",{href:"https://www.magnetforensics.com/",target:"_blank",rel:"noreferrer",children:"Magnet Forensics"})}),Object(i.jsx)("p",{children:"Software Developer Co-op"}),Object(i.jsx)("p",{children:"Worked in Data Science team to train image recognition model. Built MongoDB store to classify and store images."})]})})]}),Object(i.jsxs)(K.a,{children:[Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:"2018"})}),Object(i.jsxs)(U.a,{children:[Object(i.jsx)(Y.a,{color:"primary",variant:"outlined"}),Object(i.jsx)(V.a,{})]}),Object(i.jsx)(X.a,{children:Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("a",{href:"https://www.cibc.com/en/personal-banking.html/",target:"_blank",rel:"noreferrer",children:"CIBC Live Labs"})}),Object(i.jsx)("p",{children:"Software Developer Co-op"}),Object(i.jsx)("p",{children:"Developed mobile application for office room bookings"})]})})]}),Object(i.jsxs)(K.a,{children:[Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:"2017"})}),Object(i.jsx)(U.a,{children:Object(i.jsx)(Y.a,{color:"secondary",variant:"outlined"})}),Object(i.jsx)(X.a,{children:Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("a",{href:"https://www.cooperators.ca/",target:"_blank",rel:"noreferrer",children:"The Co-operators"})}),Object(i.jsx)("p",{children:"Software Developer Co-op"}),Object(i.jsx)("p",{children:"Developed chatbot using the Microsoft Bot Framework to replicate insurance claims"})]})})]})]})}),Object(i.jsxs)(rn,{children:[Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("h3",{children:"Quadrical.Ai"})}),Object(i.jsx)("p",{children:"Machine Learning Coop"})]}),Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon"}),Object(i.jsx)("p",{children:"Software Developer Co-op"})]}),Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("h3",{children:"CIBC"})}),Object(i.jsx)("p",{children:"Software Developer Co-op"})]}),Object(i.jsxs)(on,{children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("h3",{children:"The Co-operators"})}),Object(i.jsx)("p",{children:"Software Developer Co-op"})]})]})]})})},dn=function(){return Object(i.jsxs)(h.b.div,{variants:M,initial:"hidden",animate:"show",exit:"exit",children:[Object(i.jsx)(G,{}),Object(i.jsx)(sn,{})]})},jn=t.p+"static/media/athlete-small.9c7a85d4.png",ln=t.p+"static/media/goodtimes-small.94ab060d.png",bn=t.p+"static/media/theracer-small.51874213.png";t.p,t.p,t.p;function hn(){var n=Object(s.a)(["\n    background: #8effa0 \n"]);return hn=function(){return n},n}function xn(){var n=Object(s.a)(["\n    background: #61b46f;\n"]);return xn=function(){return n},n}function On(){var n=Object(s.a)(["\n    background:#2e5735;\n"]);return On=function(){return n},n}function un(){var n=Object(s.a)(["\n    position:fixed;\n    left:0;\n    top:10%;\n    width:100%;\n    height:100vh;\n    background:#162919;\n    z-index:2;\n"]);return un=function(){return n},n}function pn(){var n=Object(s.a)(["\n    overflow:hidden;\n"]);return pn=function(){return n},n}function fn(){var n=Object(s.a)(["\n    padding-bottom: 10rem;\n    .line{\n        height: 0.5rem;\n        background: #23d997;\n        margin-bottom: 3rem;\n    }\n    img{\n        width: 100%;\n        height: 70vh;\n        object-fit:cover;\n    }\n    h2{\n        color: #ffffff;\n    }\n"]);return fn=function(){return n},n}function mn(){var n=Object(s.a)(["\n    min-height: 100vh;\n    overflow: hidden;\n    padding: 5rem 10rem;\n    h2{\n        padding: 1rem 0rem;\n        font-size:30px;\n    }\n    @media (max-width: 1300px){\n        padding: 2rem 2rem;\n    }\n"]);return mn=function(){return n},n}var vn=Object(d.b)(h.b.div)(mn()),gn=Object(d.b)(h.b.div)(fn()),wn=d.b.div(pn()),yn=Object(d.b)(h.b.div)(un()),kn=Object(d.b)(yn)(On()),Cn=Object(d.b)(yn)(xn()),zn=Object(d.b)(yn)(hn()),Dn=function(){return Object(i.jsxs)(vn,{variants:M,initial:"hidden",animate:"show",exit:"exit",style:{background:"#1b1b1b"},children:[Object(i.jsxs)(h.b.div,{variants:F,children:[Object(i.jsx)(yn,{variants:A}),Object(i.jsx)(kn,{variants:A}),Object(i.jsx)(Cn,{variants:A}),Object(i.jsx)(zn,{variants:A})]}),Object(i.jsxs)(gn,{children:[Object(i.jsx)(h.b.h2,{variants:S,children:"React Music Player"}),Object(i.jsx)(h.b.div,{variants:B,className:"line"}),Object(i.jsxs)(gn,{children:[Object(i.jsx)(h.b.h2,{variants:S,children:"The Athlete"}),Object(i.jsx)(h.b.div,{variants:B,className:"line"}),Object(i.jsx)(b.c,{to:"/work/the-athlete",children:Object(i.jsx)(wn,{children:Object(i.jsx)(h.b.img,{variants:I,src:jn,alt:"athlete"})})})]}),Object(i.jsxs)(gn,{children:[Object(i.jsx)(h.b.h2,{children:"The Racer"}),Object(i.jsx)(h.b.div,{className:"line",variants:B}),Object(i.jsx)(b.c,{to:"/work/the-racer",children:Object(i.jsx)("img",{src:bn,alt:"athlete"})})]}),Object(i.jsxs)(gn,{children:[Object(i.jsx)(h.b.h2,{children:"Good Times"}),Object(i.jsx)(h.b.div,{className:"line",variants:B}),Object(i.jsx)(b.c,{to:"/work/good-times",children:Object(i.jsx)("img",{src:ln,alt:"athlete"})})]})]})]})},Nn=function(){return console.log("here"),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"Contact"})})};var Mn=function(){var n=Object(x.f)();return console.log(n),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{}),Object(i.jsx)(h.a,{exitBeforeEnter:!0,children:Object(i.jsx)(b.a,{children:Object(i.jsxs)(x.c,{location:n,children:[Object(i.jsx)(x.a,{path:"/",exact:!0,children:Object(i.jsx)(dn,{})}),Object(i.jsx)(x.a,{path:"/projects",exact:!0,children:Object(i.jsx)(Dn,{})}),Object(i.jsx)(x.a,{path:"/contact",children:Object(i.jsx)(Nn,{})})]},n.pathname)})})]})},Ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(b.b,{children:Object(i.jsx)(Mn,{})})}),document.getElementById("root")),Ln()}},[[47,1,2]]]);
//# sourceMappingURL=main.0212fb19.chunk.js.map