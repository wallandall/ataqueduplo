import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Landing from './pages/landing/landing.component';
import Login from './components/auth/login.component';
import Register from './components/auth/register.component';
import Alert from './components/alert/alert.component';
import Dashboard from './components/dashboard/dasboard.component';
import CreateProfile from './components/profile-forms/create-profile.component';
import EditProfile from './components/profile-forms/edit-profile.component';
import AddBelt from './components/profile-forms/add-belt.component';
import Profiles from './components/profiles/profiles.component';
import PrivateRoute from './components/routing/private-route.component';

import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './redux/utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/profiles" component={Profiles} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute exact path="/add-belt" component={AddBelt} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
