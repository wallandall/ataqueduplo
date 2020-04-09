import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Landing from './pages/landing/landing.component';
import Login from './components/auth/login.component';
import Register from './components/auth/register.component';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </section>
    </Fragment>
  </Router>
);

export default App;
