// == Import npm
import React from 'react';
import Header from 'src/components/Header'
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Contact from 'src/components/Contact';

// == Import
import './app.scss';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Contact />
    {/* <Home /> */}
    {/* <Profil /> */}
    <Footer />
  </div>
);

// == Export
export default App;
