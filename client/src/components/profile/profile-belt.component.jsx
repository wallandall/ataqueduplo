import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Black from '../../img/belts/Black.svg';
import Brown from '../../img/belts/Brown.svg';
import Purple from '../../img/belts/Purple.svg';
import Blue from '../../img/belts/Blue.svg';
import White from '../../img/belts/White.svg';

import './profile-belt.styles.css';

const ProfileBelts = ({
  belt: { belt, academy, website, instructor, location, graduation },
}) => (
  <div className="profile_belt">
    <img
      className="belt_image "
      src={(() => {
        switch (belt) {
          case 'White':
            return White;
          case 'Blue':
            return Blue;
          case 'Purple':
            return Purple;
          case 'Brown':
            return Brown;
          case 'Black':
            return Black;
          default:
            return White;
        }
      })()}
      alt={belt}
    />
    <div className="profile_belt-text hide-sm">
      <p>
        <strong>Academy : </strong>
        {academy}
      </p>
      <p>
        <strong>Instructor: </strong>
        {instructor}
      </p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      <p>
        <strong>Website: </strong>
        <Link to={website} target="_blank">
          {website}
        </Link>
      </p>
      <p>
        <strong>Graduation: </strong>
        {graduation === null ? (
          '--'
        ) : (
          <Moment format="YYYY/MM/DD">{graduation}</Moment>
        )}
      </p>
    </div>
  </div>
);

ProfileBelts.propTypes = {
  belt: PropTypes.object.isRequired,
};

export default ProfileBelts;
