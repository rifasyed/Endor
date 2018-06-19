import React, { Component, Fragment } from 'react';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Title from '../components/Title';
import LandingModals from '../components/LandingModals';

class Main  extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Landing>
          <Login />
          <Title />
          <LandingModals />
          </Landing>
        </Fragment>
      </div>

    )
  }
}

export default Main;