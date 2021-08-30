// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';
import Home from 'src/containers/Home';
import Profil from 'src/containers/Profil';
import Contact from 'src/containers/Contact';
import About from 'src/containers/About';
import ModalPrivacyData from 'src/containers/ModalPrivacyData';
import ModalEditProfil from 'src/components/ModalEditProfil';
import ModalAddReview from 'src/components/ModalAddReview';
import Single from 'src/containers/Single';
import Results from 'src/containers/Results';

import './app.scss';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/profil" component={Profil} />
      <Route exact path="/privacydata" component={ModalPrivacyData} />
      <Route exact path="/editprofil" component={ModalEditProfil} />
      <Route exact path="/addreview" component={ModalAddReview} />
      <Route exact path="/single/:id" component={Single} />
      <Route exact path="/results" component={Results} />
    </Switch>
    {/* <ModalAddReview /> */}
    <Footer />
  </div>
);

// == Export
export default App;
