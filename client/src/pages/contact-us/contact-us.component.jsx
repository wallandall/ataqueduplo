import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  // const { email, name, subject, message } = formData;

  const onChange = (e) => {
    //setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log('Test');
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Contact Us</h1>
      <p className="lead">
        <i className="fas fa-envelope"></i> Contact us now and{' '}
        <strong>set up a free class</strong>. If you have any questions,
        suggestions, anything you might share, do not hesitate to contact us.
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="* Your Email Address"
            name="email"
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Your  Name"
            name="name"
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Subject"
            name="subject"
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="* Your Message"
            name="message"
            onChange={(e) => onChange(e)}
            required
            rows="10"
            cols="30"
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary" value="Contact Us" />
      </form>
    </Fragment>
  );
};

export default ContactUs;
