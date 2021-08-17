// == Import : npm
import React from 'react';

// == Import : local
import './about.scss';

// == Component
const About = () => (
  <div className="about">
    <h1 className="about_title">Présentation de l'équipe</h1>
    <div className="about_role">
      <div className="about_name">Anthony</div>
      <div className="about_desc">Lead dev Front - Référent technique API Opencagedata</div>
    </div>
    <div className="about_role">
      <div className="about_name">Christopher</div>
      <div className="about_desc">Lead dev Back - Référent technique API Opencagedata</div>
    </div>
    <div className="about_role">
      <div className="about_name">Giovanni</div>
      <div className="about_desc">Git Master - Référent technique API RNA</div>
    </div>
    <div className="about_role">
      <div className="about_name">Sébastien</div>
      <div className="about_desc">Product Owner - Scrum Master</div>
    </div>
  </div>
)

export default About;
