// == Import : npm
import React from 'react';
import Banner from 'src/components/Banner';

// == Import : local
import './about.scss';

// == Component
const About = () => (
  <div className="about">
    <Banner />
    <h1 className="about__title">Présentation de l'équipe</h1>
    <div className="about__role">
      <div className="about__role__name">Anthony</div>
      <div className="about__role__desc">Lead dev Front - Référent technique API Opencagedata</div>
    </div>
    <div className="about__role">
      <div className="about__role__name">Christopher</div>
      <div className="about__role__desc">Lead dev Back - Référent technique API Opencagedata</div>
    </div>
    <div className="about__role">
      <div className="about__role__name">Giovanni</div>
      <div className="about__role__desc">Git Master - Référent technique API RNA</div>
    </div>
    <div className="about__role last">
      <div className="about__role__name">Sébastien</div>
      <div className="about__role__desc">Product Owner - Scrum Master</div>
    </div>
  </div>
)

export default About;
