import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner.component';
import { getProfileById } from '../../redux/actions/profile';
import ProfileTop from './profile-top.component';
import ProfileAbout from './profile-about.component';
import ProfileBelt from './profile-belt.component';

import './profile.styles.css';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div
            className="profile-grid my-1
            "
          >
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-belt bg-white p-2 ">
              <h2 className="text-primary belt_heading ">Belts</h2>
              {profile.grade.length > 0 ? (
                <Fragment>
                  {profile.grade.map((grade) => (
                    <ProfileBelt key={grade._id} belt={grade} />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
