
import React, { Component, Fragment } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy'
import axios from 'axios'

class DataChart2 extends Component {
  state = {
    labels: ['Temp 1', 'Temp 2', 'Humidity', 'Water'],
    dateArr: [],
    timeArr: [],
    tempArr: []
  }


  componentDidMount() {
    this.getData()

    this.interval = setInterval(this.getData, 10000)
  }

  getData = () => {
    let dateArr = this.state.dateArr
    let timeArr = this.state.timeArr
    let tempArr = this.state.tempArr
    axios.get('/data')
      .then(r => {
        for (let i = 0; i < r.data.length; i++) {
          dateArr.push(r.data[i].date)
          timeArr.push(r.data[i].time)
          tempArr.push(r.data[i].temperature)
          console.log("this is " + r.data[i].time)
        }
        this.setState({ dateArr, timeArr, tempArr })
      }).catch(e => {
        console.log(`My Error ${e}`)
      })
  }


  render() {
    return (
      <Fragment>  
        <div className="chartBG">
          <ul className="dataCard">

            {this.state.dateArr.map(r =>
              <li>{r}</li>
            )}
          </ul>
          {/* <ul className="dataCard">
            {this.state.timeArr.map(r =>
              <li>{r}</li>
            )}
          </ul>
          <ul className="dataCard">
            {this.state.tempArr.map(r =>
              <li>{r}</li>
            )}
          </ul> */}
        </div>
      </Fragment >
    )
  }
};

export default DataChart2;

//Reefers Beavers 