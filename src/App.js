import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SimpleReactLightbox from "simple-react-lightbox";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Nav from "./components/Nav";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/work" exact>
            <SimpleReactLightbox>
              <Portfolio/>
            </SimpleReactLightbox>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;
