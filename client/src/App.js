import React, { Component, Fragment } from 'react';
// import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main.js'
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';
import RTChart from './components/RTChart';
import BiomeSelector from './components/BiomeSelector'

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
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/rtchart" component={RTChart} />
            <Route exact path="/biome" component={BiomeSelector} />
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App;
