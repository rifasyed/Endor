import React from 'react';
import { Icon, Col, Modal, Button, Form, Input, Row } from 'react-materialize';
import './UserSettings.css';

const UserSettings = () => (
    <div className="usersettingsBG">
        <Row>
            <Col s={1} />
            <Col s={10}>
                <h3>Initial Setup <Icon>build</Icon></h3>
            </Col>
        </Row>
        <div className="formBG">
            <Row>
                <Col s={1} />
                <Col s={10}>
                        <Input s={6} label="First Name" />
                        <Input s={6} label="Last Name" />                    
                        <Input s={6} label="Project Name" />
                </Col>
            </Row>
            <Row>
                <Col s={1} />
                <Col s={10} className="testB">
                        <Input s={6} type='select' label="Plant Type" defaultValue=''>
                            <option value='1'>Cannabis</option>
                            <option value='2'>Garden Herbs</option>
                        </Input>
                        <Input s={6} type='select' label="Biome Selection">
                            <option value='1'>Desert</option>
                            <option value='2'>Ocean</option>
                            <option value='3'>Forest</option>
                        </Input>
                </Col>
            </Row>
            <Row>
                <Col s={1} />
                <Col s={10} className="testB">
                        <Input s={6} type='select' label="Vegetative Light Cycle">
                            <option value='1'>22/2</option>
                            <option value='2'>20/4</option>
                            <option value='3'>18/6</option>
                        </Input>
                        <Input s={6} type='select' label="Flowering Light Cycle">
                            <option value='1'>12/12</option>
                            <option value='2'>13/11</option>
                            <option value='3'>11/13</option>
                        </Input>
                </Col>
            </Row>
            <Row>
                <Col s={1} />
                <Col s={10} className="testA">
                        <Input s={6} type='select' label="Vegetative Period (in weeks)">
                            <option value='1'>3</option>
                            <option value='2'>4</option>
                            <option value='3'>5</option>
                            <option value='3'>6</option>
                            <option value='3'>7</option>
                            <option value='3'>8</option>
                        </Input>
                        <Input s={6} type='select' label="Flowering Period (in weeks)">
                            <option value='1'>8</option>
                            <option value='2'>9</option>
                            <option value='3'>10</option>
                            <option value='3'>11</option>
                            <option value='3'>10</option>
                        </Input>
                </Col>
            </Row>
            <Row>
                <Button className="finishBTN">Finish</Button>
            </Row>
        </div >

    </div >
)

export default UserSettings;