import React, { Component } from 'react';
import axios from 'axios';


class ChartTest extends Component {

    constructor(props) {
        super(props);
        this.
        // this.onChangeHostName = this.onChangeHostName.bind(this);
        // this.onChangePort = this.onChangePort.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            date: '',
            time: '',
            temperature: ''
        }
    }
    onChangeHostName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePort(e) {
        this.setState({
            port: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const tempPort = {
            date: this.state.date,
            time: this.state.time,
            temperature: this.state.temperature
        }
        axios.post('http://localhost:3000/route', tempPort)
        .then(res => console.log(res.data));
        
        this.setState({
            date: '',
            time: '',
            temperature: ''
        });
    }

    componentDidMount() {
        axios.post('/api/temp1')
            .then(res => {
                this.setState({ date: res.data.date})
                console.log(this.state.date)
            })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port}  onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChartTest;