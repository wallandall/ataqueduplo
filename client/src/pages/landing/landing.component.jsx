import React from 'react';

import './landing.styles.css';
import AD from '../../img/AD.png';

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large heading-primary-main">Ataque Duplo</h1>
          <p className="lead heading-primary-sub">Brazilian Jiu-Jitsu</p>
          <img
            className="slide-in-fwd-center"
            src={AD}
            alt="Ataque Duplo"
            id="home-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
