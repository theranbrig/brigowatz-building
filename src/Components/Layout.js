import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Work from './Pages/Work';
import Footer from './Footer';

const theme = {
  black: '#22293B',
  gray: '#535C73',
  orange: '#F07F33',
  darkBlue: '#072033',
  offWhite: '#fff',
};

const Layout = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Router>
        <>
          <Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Navbar>
          <Footer />
        </>
      </Router>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
