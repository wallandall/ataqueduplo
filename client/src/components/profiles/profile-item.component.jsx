import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Black from '../../img/belts/Black.svg';
import Brown from '../../img/belts/Brown.svg';
import Purple from '../../img/belts/Purple.svg';
import Blue from '../../img/belts/Blue.svg';
import White from '../../img/belts/White.svg';
import './profile-item.styles.css';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    academy,
    location,
    skills,
    current_belt,
  },
}) => {
  console.log(current_belt);
  const belt = current_belt;
  return (
    <div className="profile">
      <picture className="profile_thumbnail">
        <img
          src={(() => {
            switch (belt) {
              case '1':
                return White;
              case '2':
                return Blue;
              case '3':
                return Purple;
              case '4':
                return Brown;
              case '5':
                return Black;
              default:
                return White;
            }
          })()}
          alt="Belt "
        />
      </picture>

      <div className="profile_item-content">
        <h2>{name}</h2>
        <h3>{academy && <span> {academy}</span>}</h3>
        <p>{location && <span>{location}</span>}</p>
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check" /> {skill}
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <Link to={`/profile/${_id}`} className="btn btn-primary my-1">
          View Profile
        </Link>
      </footer>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
