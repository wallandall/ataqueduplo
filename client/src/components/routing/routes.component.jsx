import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ClassSchedule from '../../pages/class-schedule/class-schedule.component';
import ContactUs from '../../pages/contact-us/contact-us.component';
import Login from '../auth/login.component';
import Register from '../auth/register.component';
import Alert from '../alert/alert.component';
import Dashboard from '../dashboard/dasboard.component';
import CreateProfile from '../profile-forms/create-profile.component';
import EditProfile from '../profile-forms/edit-profile.component';
import AddBelt from '../profile-forms/add-belt.component';
import Profiles from '../profiles/profiles.component';
import Profile from '../profile/profile.component';
import Posts from '../posts/posts.component';
import Post from '../post/post.component';
import NotFound from '../not-found/not-found.component';
import PrivateRoute from '../routing/private-route.component';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/class-schedule" component={ClassSchedule} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profiles" component={Profiles} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-belt" component={AddBelt} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
