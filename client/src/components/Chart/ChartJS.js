import React, { Component, Fragment } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './ChartJS.css'
import axios from 'axios'

class ChartJS extends Component {
  state = { 
      labels: ['Temp 1', 'Temp 2', 'Humidity', 'Water'],
      dateArr: [],
      timeArr: [],
      tempArr: []
  }

   componentDidMount() {
    this.getData()

    this.interval = setInterval(this.getData, 1000)
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
      }
      console.log(dateArr)
      console.log(timeArr)
      console.log(tempArr)
      this.setState({dateArr, timeArr, tempArr})
    }).catch(e => {
      console.log(`My Error ${e}`)
    })
  }
  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       chartData: {
  //         labels: ['Temp 1', 'Temp 2', 'Humidity,', 'Water'],
  //         datasets: [
  //           {
  //             label: 'Temperature (F)',
  //             data: [
  //               100, 
  //               150, 
  //               300,
  //               75
  //             ],
  //             backgroundColor: [
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(255, 99, 132, 0.6)'
  //             ]
  //           }
  //         ]
  //       }
  //     }
  // }

  render() {
    return (
      <Fragment>
      {/* <div className="chart">
        <Line
          data={this.state.chartData}

          options={{
            maintainAspectRatio: false
          }}
        />

      </div> */}
      <div className="chartBG">
        <h1>hi</h1>
        <ul>

        {this.state.dateArr.map(r => 
          <li>{r}</li>
        )}
        </ul>
        <ul>

        {this.state.timeArr.map(r => 
          <li>{r}</li>
        )}
        </ul>
        <ul>

        {this.state.tempArr.map(r => 
          <li>{r}</li>
        )}
        </ul>
      </div>
          </Fragment>
    )
  }
};

export default ChartJS;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ChartistGraph from '../../index';

// class Pie extends Component {
//   render() {

//     var data = {
//       labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
//       series: [
//         [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
//       ]
//     };

//     var options = {
//       high: 10,
//       low: -10,
//       axisX: {
//         labelInterpolationFnc: function (value, index) {
//           return index % 2 === 0 ? value : null;
//         }
//       }
//     };

//     var type = 'Bar'

//     return (
//       <div>
//         <ChartistGraph data={data} options={options} type={type} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Pie />, document.body)

// export default Pie;
//Reefers Beavers 