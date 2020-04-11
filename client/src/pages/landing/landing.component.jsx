import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './landing.styles.css';
import AD from '../../img/AD.png';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
