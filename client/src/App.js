import React, { Component, Fragment } from 'react';
// import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main.js'
import Dashboard from './components/Dashboard';
import Biompage from './components/Biompage';
import ChartJS from './components/Chart';
import RTChart from './components/RTChart';
import Auth from './components/Auth';
import ChartRoute from './components/ChartRoute'
import Switch from './components/Switch'
import DataChart from './components/DataChart'
import Test from './components/DataTest/DataChartTest'
// import DashChart1 from './components/DashChart1';

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
            <Route exact path="/biompage" component={Biompage} />
            <Route exact path="/chart" component={ChartJS} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/route" component={ChartRoute} />
            <Route exact path="/switch" component={Switch} />
            <Route exact path="/data" component={DataChart} />
            <Route exact path="/test" component={Test} />
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App;
