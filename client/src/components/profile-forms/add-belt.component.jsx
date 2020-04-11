import React, { Fragment, useState } from 'react';
import { Link, WithRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBelt } from '../../redux/actions/profile';

const AddBelt = ({ addBelt, history }) => {
  const [formData, setFormData] = useState({
    belt: '',
    academy: '',
    instructor: '',
    location: '',
    website: '',
    graduation: '',
  });

  const { belt, academy, instructor, location, website, graduation } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add A Belt</h1>
      <p className="lead">
        <i className="fas fa-medal"></i> Add your previos and current BJJ belts
        to your profile.
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addBelt(formData, history);
        }}
      >
        <div className="form-group">
          <select name="belt" value={belt} onChange={(e) => onChange(e)}>
            <option value="0">* Select Belt</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
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
            required
            value={academy}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Instructor"
            name="instructor"
            required
            value={instructor}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="graduation"
            value={graduation}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddBelt.propTypes = {
  addBelt: PropTypes.func.isRequired,
};

export default connect(null, { addBelt })(AddBelt);
