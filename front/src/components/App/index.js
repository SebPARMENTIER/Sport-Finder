/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';
import Home from 'src/containers/Home';
import Profile from 'src/containers/Profile';
import Contact from 'src/containers/Contact';
import About from 'src/containers/About';
import Single from 'src/containers/Single';
import Results from 'src/containers/Results';
import Error from 'src/components/Error';
import './app.scss';

// == Component
const App = ({
  accountExists,
}) => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      {accountExists && (
        <Route exact path="/profil" component={Profile} />
      )}
      <Route exact path="/single/:id" component={Single} />
      <Route exact path="/results" component={Results} />
      <Route component={Error} />
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  accountExists: PropTypes.bool.isRequired,
};

// == Export
export default App;
