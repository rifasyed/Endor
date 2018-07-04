import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ChartJS extends Component {
  constructor(props) {
    super(props);
      this.state = {
        chartData: {
          labels: ['Temp 1', 'Temp 2', 'Humidity,', 'Water'],
          datasets: [
            {
              label: 'Temperature (F)',
              data: [
                100, 
                150, 
                300,
                75
              ],
              backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      }
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}

          options={{
            maintainAspectRatio: false
          }}
        />

      </div>

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