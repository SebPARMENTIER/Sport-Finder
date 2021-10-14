/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import Banner from 'src/components/Banner';
import ModalSignIn from 'src/containers/ModalSignIn';
import ModalSignUp from 'src/containers/ModalSignUp';
import PropTypes from 'prop-types';

// == Import : local
import './about.scss';

// == Component
const About = ({
  openLogIn,
  openLogUp,
}) => (
  <div className="about">
    <Banner />
    <h1 className="about__title">Présentation de l'équipe</h1>
    <div className="about__role">
      <div className="about__role__name">Anthony</div>
      <div className="about__role__desc">Git Master - Référent technique React-Select</div>
    </div>
    <div className="about__role">
      <div className="about__role__name">Christopher</div>
      <div className="about__role__desc">Lead dev Back - Référent technique Heroku</div>
    </div>
    <div className="about__role">
      <div className="about__role__name">Giovanni</div>
      <div className="about__role__desc">Lead dev Front - Référent technique API RNA - Geo API Gouv - API Leaflet</div>
    </div>
    <div className="about__role last">
      <div className="about__role__name">Sébastien</div>
      <div className="about__role__desc">Product Owner - Scrum Master</div>
    </div>
    { openLogIn && <ModalSignIn />}
    { openLogUp && <ModalSignUp />}
  </div>
);

About.propTypes = {
  openLogIn: PropTypes.bool.isRequired,
  openLogUp: PropTypes.bool.isRequired,
};

// == Export
export default About;
