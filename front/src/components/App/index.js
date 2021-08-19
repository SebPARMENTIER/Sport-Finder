// == Import npm
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from 'src/components/Header'
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import ModalPrivacyData from '../ModalPrivacyData';
import ModalEditProfil from '../ModalEditProfil';


// == Import
<<<<<<< HEAD
import Error from 'src/components/Error';
import './app.scss';
=======
import './app.scss';

>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5

// == Composant
const App = () => (
  <div className="app">
<<<<<<< HEAD
    <Error />
   
=======
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
>>>>>>> bd55bd1cf012b6eb5ec069beec06542f29e01ba5
  </div>
);

// == Export
export default App;
