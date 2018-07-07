import React, { Component } from 'react';
// import BiomeSelector from '../components/BiomeSelector';
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
        
          <BiomeModal/>
          </Biompage>
      </div>

    )
  }
}

export default BiomeSelect;