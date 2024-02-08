import React, { useEffect } from 'react';
import GlobalStyle from './components/GlobalStyles';

//Import Pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';

//Router
import { Routes, Route } from 'react-router-dom';

//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    let title = "Michelle Loo"
    document.title = title;
  });
  //<Route path="/blog" exact element={<Blog />} />
  //<Route path="/blog" exact element={<Blog />} />
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />

          <Route path="*" element={<AboutUs />} />
        </Routes>
      </AnimatePresence>
    </div >
  );
}

export default App;
