import React, { Fragment } from 'react';

import './class-schedule.styles.css';
const ClassSchedule = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">Schedule</h1>
      <p className="lead">
        <i className="fas fa-users"></i> Join our classes
      </p>
      <table id="classes">
        <thead>
          <tr>
            <th> Day</th>
            <th> Time</th>
            <th> Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>19:00 - 20:00</td>
            <td>All Levels</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>20:00 - 21:30</td>
            <td>All Levels</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>20:00 - 21:30</td>
            <td>All Levels</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>19:00 - 20:00</td>
            <td>Competition Trainign</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>12:00 - 13:30</td>
            <td>All Levels</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ClassSchedule;
