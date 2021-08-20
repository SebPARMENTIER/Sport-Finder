// == Import npm
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from 'src/containers/Header'
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Contact from 'src/containers/Contact';
import About from 'src/components/About';
import ModalPrivacyData from 'src/components/ModalPrivacyData';
import ModalEditProfil from 'src/components/ModalEditProfil';
import ModalSignUp from 'src/containers/ModalSignUp';


// == Import
import './app.scss';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/profil' component={Profil}></Route>
      <Route exact path='/privacydata' component={ModalPrivacyData}></Route>
      <Route exact path='/editprofil' component={ModalEditProfil}></Route>
      </Switch>
    <Footer />
    {/* <ModalSignUp /> */}
  </div>
);

// == Export
export default App;
