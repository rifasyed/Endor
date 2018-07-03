import React, { Component } from 'react';
import axios from 'axios';
import TempTable from './TempTable';

class GetData extends Component {

  constructor(props) {
      super(props);
      this.state = {
          tempPort: []
        };
    }
    componentDidMount(){
      axios.get('http://localhost/Endor/datas')
      .then(response => {
        this.setState({ datas: response.data });
        console.log(response.data.obj)
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.datas.map(function(object, i){
            return <TempTable obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Date</td>
                  <td>Time</td>
                  <td>Temperature</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

  export default GetData;