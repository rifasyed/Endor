import React, { Component, Fragment } from 'react';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Title from '../components/Title';
import LandingModals from '../components/LandingModals';
import ModalContent from '../components/ModalContent';

class Main extends Component {
  render() {
    return (
      <div>
        <Landing>
          <Login />
          <Title />
          <LandingModals />
          <ModalContent />
        </Landing>
      </div>

    )
  }
}

export default Main;