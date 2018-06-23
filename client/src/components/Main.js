import React, { Component } from 'react';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Title from '../components/Title';
import LandingModals from '../components/LandingModals';


class Main extends Component {
  render() {
    return (
      <div>
        <Landing>
          <Login />
          <Title />
          <LandingModals />
          </Landing>
      </div>

    )
  }
}

export default Main;