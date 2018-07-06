import React from 'react'
import { Icon, Col, Row, Input } from 'react-materialize';
import './Switch.css';

const Switch = () => (
  <div className="switchStyle">
    <Row>
      <Col s={12}>
        <h1 id="endorWord">
          ENDOR [ <Icon>all_inclusive</Icon> ]
        </h1>
      </Col>
      <Col s={6}>
        <span className="switchHeader">Fan One 
        <Icon className="material-icons">toys</Icon>
        <Input id="fanOne" name="off" type="switch" value="1"
        />
      </span>
      <span className="switchHeader">Fan Two
      <Icon className="material-icons">toys</Icon>
        <Input id="fanTwo" name="off" type="switch" value="1"
        />
      </span>
      <span className="switchHeader">Humidity
      <Icon className="material-icons">cloud_queue</Icon>
        <Input id="humidOn" name="off" type="switch" value="1"
        />
      </span>
      </Col>

      <Col s={6}>
      <span className="switchHeader">Light 
      <Icon className="material-icons">brightness_5</Icon>
        <Input id="lightOn" name="off" type="switch" value="1"
        />
      </span>
      <span className="switchHeader">Night Light
      <Icon className="material-icons">brightness_4</Icon>
        <Input id="nightLightOn" name="off" type="switch" value="1"
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

export default Switch;