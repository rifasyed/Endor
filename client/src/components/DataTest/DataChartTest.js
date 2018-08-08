import React, { Component, Fragment } from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import { Button, Icon, Row, Col } from 'react-materialize'
import axios from 'axios';
import API from '../../utils/API';

class DataChartTest extends Component {
  state = {
    labels: ['Temp 1', 'Temp 2', 'Humidity', 'Water'],
    dateArr: {},
    timeArr: {},
    tempArr: {}
  };

  componentDidMount() {
    this.getData()

    this.interval = setInterval(this.getData, 10000)
  };

  getDate = () => {
    let dateArr = this.state.dateArr
    this.setState(
      {
        dateArr: {
          label: [
            'Date'
          ],
          datasets: [{
            data: [dateArr],
            backgroundColor: [
              '#36A2EB'
            ]
          }]
        }
      }
    )
  };

  getTime = () => {
    let timeArr = this.state.timeArr
    this.setState(
      {
        timeArr: {
          label: [
            'Time'
          ],
          datasets: [{
            data: [timeArr],
            backgroundColor: [
              '#36A2EB'
            ]
          }]
        }
      }
    )
  };

  getTemp = () => {
    let tempArr = this.state.tempArr
    this.setState(
      {
        tempArr: {
          label: [
            'Temp'
          ],
          datasets: [{
            data: [tempArr],
            backgroundColor: [
              '#36A2EB'
            ]
          }]
        }
      }
    )
  };

  // setRadarData = () => {
  //   // const dateArr 
  //   // const timeArr
  //   // const tempArr

  //   this.setState(
  //     {
  //       radarData: {
  //         labels: ['Data', 'Time', 'Temp'],
  //         datasets: [
  //           {
  //             label: 'All Data',
  //             data: [dateArr, timeArr, tempArr]
  //           }
  //         ]
  //       }
  //     }
  //   )
  // };

  getData = () => {
    API.get('/data')
      .then(r => {
        this.setState({ data: r.data })
        console.log(this.state.data)
      }).then(r => {
        this.getTime()
        this.getData()
        this.getTemp()
      })
  }

  // getData = () => {
  //   let dateArr = this.state.dateArr
  //   let timeArr = this.state.timeArr
  //   let tempArr = this.state.tempArr
  //   axios.get('/data')
  //     .then(r => {
  //       for (let i = 0; i < r.data.length; i++) {
  //         dateArr.push(r.data[i].date)
  //         timeArr.push(r.data[i].time)
  //         tempArr.push(r.data[i].temperature)
  //         console.log("this is " + r.data[i].time)
  //       }
  //       this.setState({ dateArr, timeArr, tempArr })
  //     }).catch(e => {
  //       console.log(`My Error ${e}`)
  //     })
  // }


  render() {
    return (
      <Fragment>
        <div className="chartBG">
          <Row>
            <h3>Data</h3>
            <Bar
              data={this.state.timeArr}
            />
          </Row>
        </div>
      </Fragment >
    )
  }
};

export default DataChartTest;

// //Reefers Beavers 