import React, { Component } from 'react'
import { Icon, Col, Row, Input } from 'react-materialize';
import './Switch.css';

class Switch extends Component {
  state: {
    
  }
  render () {
    return (
    <div className="switchStyle">
      <Row>
        <Col s={12}>
          <h1 id="endorWord">
            MANUAL SWITCHES [ <Icon className="headerIcon">lock_open</Icon> ]
          </h1>
        </Col>
        <Col s={6}>
          <span className="switchHeader">Fan One 
          <Icon className="material-icons">toys</Icon>
          <Input id="fanOne" name="on" type="switch" value="1"
          />
        </span>
        <span className="switchHeader">Fan Two
        <Icon className="material-icons">toys</Icon>
          <Input id="fanTwo" name="on" type="switch" value="1"
          />
        </span>
        <span className="switchHeader">Humidity
        <Icon className="material-icons">cloud_queue</Icon>
          <Input id="humidOn" name="on" type="switch" value="1"
          />
        </span>
        </Col>
  
        <Col s={6}>
        <span className="switchHeader">Light 
        <Icon className="material-icons">brightness_5</Icon>
          <Input id="lightOn" name="on" type="switch" value="1"
          />
        </span>
        <span className="switchHeader">Night Light
        <Icon className="material-icons">brightness_4</Icon>
          <Input id="nightLightOn" name="on" type="switch" value="1"
          />
        </span>
        <span className="switchHeader">Pump
        <Icon className="material-icons">build</Icon>
          <Input id="pumpOn" name="off" type="switch" value="1"
          />
        </span>
        </Col>
      </Row>
  
    </div>

    )
  }

}


export default Switch;