import React, { Component } from 'react';
import Lights from '../components/Lights';
import Biompage from '../components/Biompage';
import BSTitle from '../components/BSTitle';



class BiomeSelect extends Component {
  render() {
    return (
      <div>
        <Biompage>
          {/* <Login /> */}
          <BSTitle/>
          <Lights/>
          </Biompage>
      </div>

    )
  }
}

export default BiomeSelect;