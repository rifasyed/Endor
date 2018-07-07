import React from 'react'
import { Icon, Col, Row, Input } from 'react-materialize';
import './Switch.css';

const Switch = () => (
  <div className="switchStyle">
    <Row>
      <Col s={12}>
        <h1 id="endorWord">
          MANUAL SWITCHES [ <Icon className="headerIcon">lock_open</Icon> ]
          </h1>
      </Col>
    </Row>
    <Row className="itemSpace">
      <Col s={2} />
      <Col s={3}>
        <Input className="filled-in" icon="toys" id="fanOne" name="group1" type="checkbox" label="Fan One" value="green"
        />
      </Col>
      <Col s={2} />
      <Col s={3}>
        <Input className="filled-in" icon="toys" id="fanTwo" name="group1" type="checkbox" label="Fan Two" value="green"
        />
      </Col>
      <Col s={2} />
    </Row>
    <Row className="itemSpace">
      <Col s={2} />
      <Col s={3}>
        <Input className="filled-in" icon="highlight" id="lightOn" name="group1" type="checkbox" label="Light" value="green"
        />
      </Col>
      <Col s={2} />
      <Col s={3}>
        <Input className="filled-in" icon="brightness_4" id="nightLightOn" name="group1" type="checkbox" label="Display Light" value="green"
        />
      </Col>
      <Col s={2} />
    </Row>
    <Row className="itemSpace">
      <Col s={2} />
      <Col s={3}>
        <Input className="filled-in" icon="cloud_queue" id="humidOn" name="group1" type="checkbox" label="Humidity" value="green"
        />
      </Col>
      <Col s={2} />
      <Col s={3}>
        <Input className="filled-in" icon="build" id="pumpOn" name="group1" type="checkbox" label="Pump" value="green"
        />
      </Col>
      <Col s={2} />
    </Row>
  </div>
)



export default Switch;