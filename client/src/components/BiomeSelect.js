import React, { Component } from 'react';
// import Lights from '../components/Lights';
import Biompage from '../components/Biompage';
import BSTitle from '../components/BSTitle';
import BiomeModal from '../components/BiomeModal';


class BiomeSelect extends Component {
  render() {
    return (
      <div>
        <Biompage>
          {/* <Login /> */}
          <BSTitle/>
          <Lights/>
          <BiomeModal/>
          </Biompage>
      </div>

    )
  }
}

export default BiomeSelect;