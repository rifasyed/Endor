import React, { Component } from 'react';

class TempTable extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.date}
          </td>
          <td>
            {this.props.obj.time}
          </td>
          <td>
            {this.props.obj.temperature}
          </td>
        </tr>
    );
  }
}

export default TempTable;