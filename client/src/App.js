import React, { Component, Fragment } from 'react';
// import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main.js'
import Dashboard from './components/Dashboard';
// biomselector folder//
// import Dashboard from './components/biomSelector';

// import './App.css';
// import Landing from './components/Landing';
// import Login from './components/Login';
// import Title from './components/Title';
// import LandingModals from './components/LandingModals';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App;
