import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink as Anchor } from 'react-router-hash-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './landing.styles.css';
import AD from '../../img/AD.png';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
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
            <div className="arrow bounce">
              <Anchor to="/#about">
                <i className="fas fa-chevron-down fa-3x"></i>
              </Anchor>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-inner">
          <h1 className="x-large text-primary " id="about">
            About Ataque Duplo
          </h1>
          <div className="about_text">
            Ataque Duplo Brazilian Jiu Jitsu Academy´s core value is to assist
            our students on their path to excel. Through focus and hard work, we
            help our members to achieve an exceptionally technical Jiu Jitsu
            skill level helping them to refine their own abilities. As a team,
            we learn how to master the control of our bodies as conquering
            machines in the everyday battle towards success – either on the
            mats, or in our personal lives as students, business- or family men
            and -wives. Be part of it and start the construction of your own
            empire today.
            <h2 className="text-primary my-2">Who are we</h2>
            Ataqueduplo was founded in 1996 in Florianópolis, south Brazil, by
            Murilo Rupp and Sergio Sá. Ever since members of Ataqueduplo spread
            around the world creating champions, winning titles and building
            characters through hard work, sweat, dedication and discipline on
            the mats…
            <h2 className="text-primary my-2">Our mission</h2>
            Develop Brazilian Jiu Jitsu in Germany by providing the general
            public the possibility to join an incredible experience about self
            knowledge, healthy life style, team spirit, friendship, respect and
            discipline, as a regular practitioner or a competition driven
            athlete…
            <h2 className="text-primary my-2">Why do Jiu Jitsu?</h2>
            Brazilian Jiu Jitsu has been lately considered the most effective
            martial art among all. Using mechanics and physical principles of
            leverage a smaller individual is capable of submitting bigger and
            heavier opponents. Not only the sport is a sensational game but it
            also comprises respect, discipline, self defense, self confidence
            and strategy…
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
