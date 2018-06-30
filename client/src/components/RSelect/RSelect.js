import React, { Fragment, Component } from 'react';
import { Icon, Col, Button } from 'react-materialize';

import './RSelect.scss';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class RSelect extends React.Component {
  
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          
        ]}
      />
    );
  }
}

export default RSelect;