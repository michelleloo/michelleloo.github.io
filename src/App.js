import React, { useEffect } from 'react';
import GlobalStyle from './components/GlobalStyles';

//Import Pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
//Router
import { Switch, Route, useLocation, BrowserRouter } from 'react-router-dom';

//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    let title = "Michelle Loo"
    document.title = title;
  });;
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <AboutUs />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </AnimatePresence>

    </div >
  );
}

export default App;
