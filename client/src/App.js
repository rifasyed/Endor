import React, { Component, Fragment } from 'react';
// import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main.js'
import Dashboard from './components/Dashboard';
import ChartJS from './components/Chart';
import BiomeSelect from './components/BiomeSelect';
import RTChart from './components/RTChart';

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
            <Route exact path="/chart" component={ChartJS} />
            <Route exact path="/biomeSelect" component={BiomeSelect} />
            <Route exact path="/rtchart" component={RTChart} />
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App;
