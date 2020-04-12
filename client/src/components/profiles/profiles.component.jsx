import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner.component';
import ProfileItem from '../profiles/profile-item.component';
import { getProfiles } from '../../redux/actions/profile';

import './profiles.styles.css';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Profiles</h1>
          <p className="lead">
            <i className="fas fa-users"></i> View and connect with other
            graplers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) =>
                profile.status === 'Public' ? (
                  <ProfileItem key={profile._id} profile={profile} />
                ) : null
              )
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  // auth: state.auth
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
