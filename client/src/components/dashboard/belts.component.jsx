import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteBelt } from '../../redux/actions/profile';

import Black from '../../img/belts/Black.svg';
import Brown from '../../img/belts/Brown.svg';
import Purple from '../../img/belts/Purple.svg';
import Blue from '../../img/belts/Blue.svg';
import White from '../../img/belts/White.svg';
import './belts.styles.css';

const Belts = ({ grade, deleteBelt }) => {
  const belts = grade.map((b) => (
    <div className="belt" key={b._id}>
      <img
        className="belt_image "
        src={(() => {
          switch (b.belt) {
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
        alt={b.belt}
      />

      <div className="belt_text hide-sm">
        <p>
          <strong>Academy : </strong>
          {b.academy}
        </p>
        <p>
          <strong>Instructor: </strong>
          {b.instructor}
        </p>
        <p>
          <strong>Location: </strong>
          {b.location}
        </p>
        <p>
          <strong>Website: </strong>
          <Link to={b.website} target="_blank">
            {b.website}
          </Link>
        </p>
        <p>
          <strong>Graduation: </strong>
          {b.graduation === null ? (
            '--'
          ) : (
            <Moment format="YYYY/MM/DD">{b.graduation}</Moment>
          )}
        </p>
      </div>
      <div className="belt_button ">
        <button onClick={() => deleteBelt(b._id)} className="btn btn-danger ">
          Delete
        </button>
      </div>
    </div>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Belts</h2>
      <div className="belt_container">{belts}</div>
    </Fragment>
  );
};

Belts.prototype = {
  grade: PropTypes.array.isRequired,
  deleteBelt: PropTypes.func.isRequired,
};

export default connect(null, { deleteBelt })(Belts);
