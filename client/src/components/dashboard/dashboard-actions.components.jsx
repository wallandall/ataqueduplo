import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to="add-belt" className="btn btn-light">
        <i className="fas fa-medal text-primary"></i> Add Belt
      </Link>
      <Link to="add-exercise" className="btn btn-light">
        <i className="fas fa-running text-primary"></i> Add Exercise
      </Link>
      <Link to="add-note" className="btn btn-light">
        <i className="far fa-edit text-primary"></i> Add Note
      </Link>
    </div>
  );
};

export default DashboardActions;
