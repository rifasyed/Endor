import React, { Component, Fragment } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import axios from 'axios';

class ChartJS extends Component {
    state = {
        chartData: {
            labels: ['Temp 1', 'Temp 2', 'Humidity', 'Water'],
            data: {
                dateArr: [],
                timeArr: [],
                tempArr: []
            }
        }
    }

    componentDidMount() {
        this.getData()

        this.interval = setInterval(this.getData, 10000)
    }

    getData = () => {
        let dateArr = this.state.chartData.data.dateArr
        let timeArr = this.state.chartData.data.timeArr
        let tempArr = this.state.chartData.data.tempArr
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
                this.setState({ dateArr, timeArr, tempArr })
            }).catch(e => {
                console.log(`My Error ${e}`)
            })
    }

    render() {
        return (
            <Fragment>
                {/* <Bar ref='chart' data={data} /> */}

                <div className="chart">
                    <Bar
                        data={this.state.chartData.map(r=>{r})}

                        options={{
                            maintainAspectRatio: false
                        }}
                    />

                </div>
                <div className="chartBG">
                    <ul>

                        {this.state.chartData.data.dateArr.map(r =>
                        // {this.state.chartData.data.dateArr.lastIndexOf(r => 
                            <li>{r}</li>
                        )}
                    </ul>
                    <ul>

                        {this.state.chartData.data.timeArr.map(r =>
                            <li>{r}</li>
                        )}
                    </ul>
                    <ul>

                        {this.state.chartData.data.tempArr.map(r =>
                            <li>{r}</li>
                        )}
                    </ul>
                </div>
            </Fragment>
        )
    }
};

export default ChartJS;

//Reefers Beavers 