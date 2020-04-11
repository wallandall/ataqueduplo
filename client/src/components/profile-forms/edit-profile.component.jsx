import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createProfile, getCurrentProfile } from '../../redux/actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    academy: '',
    location: '',
    status: '',
    user_type: '',
    skills: '',
    bio: '',
    //dob: '',
    current_weight: '',
    goal_weight: '',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      academy: loading || !profile.academy ? '' : profile.academy,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills,
      bio: loading || !profile.bio ? '' : profile.bio,
      //dob: loading || !profile.dob ? '' : profile.dob,
      current_weight:
        loading || !profile.current_weight ? '' : profile.current_weight,
      goal_weight: loading || !profile.goal_weight ? '' : profile.goal_weight,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
    });
  }, [loading]);
  const {
    academy,
    location,
    status,
    skills,
    bio,
    //dob,
    current_weight,
    goal_weight,
    youtube,
    twitter,
    instagram,
    facebook,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's create your profile
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0">* Select Status</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          <small className="form-text">
            Make your profile Public to share with other students or Private to
            make it hidden
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Academy"
            name="academy"
            value={academy}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Enter your academy name</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Enter your location(Country, City)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg. Judo,Standup,No Gi etc)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio about yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        {/* {
          <div className="form-group">
            <input
              type="date"
              placeholder="Date of Birth"
              name="dob"
              value={Moment(new Date(dob)).format('MM-DD-YYYY')}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Your date of birth will not be visible to other members
            </small>
          </div>
        } */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Current weight"
            name="current_weight"
            value={current_weight}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Your current weight will not be visible to other members
          </small>
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Goal weight"
            name="goal_weight"
            value={goal_weight}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Your goal weight will not be visible to other members
          </small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
