import React from 'react';
import { Icon, Col, Modal, Button, Form, Input, Row } from 'react-materialize';
import './UserSettings.css';

const UserSettings = () => (
    <div className="usersettingsBG">
        <Row>
            <Col s={12}>
                <h3>Initial Setup <Icon>build</Icon></h3>
            </Col>
        </Row>
        <div className="formBG">
            <Row>
                <Col s={12}>
                    {/* <Col s={6}> */}
                    <Col s={10}>
                        {/* <h3 className="userheading"><Icon>person</Icon>Project Owner</h3> */}
                        <Input s={6} label="First Name" />
                        <Input s={6} label="Last Name" />
                    </Col>
                    <Col s={10}>
                        {/* <h3 className="userheading"><Icon>create_new_folder</Icon>Project Name</h3> */}
                        <Input s={6} label="Project Name" />
                    </Col>
                    {/* </Col> */}
                    {/* <Col s={6}> */}
                    <Col s={6}>
                        <Input s={6} type='select' label="Biome Selection">
                            <option value='1'>Desert</option>
                            <option value='2'>Ocean</option>
                            <option value='3'>Forest</option>
                        </Input>
                    </Col>
                    <Col s={6}>
                        <Input s={6} type='select' label="Plant Type">
                            <option value='1'>Vegetative</option>
                            <option value='2'>Flowering</option>
                            <option value='3'>Light cycle</option>
                        </Input>
                    </Col>
                    {/* </Col> */}
                </Col>
            </Row>
        </div>

        {/* <div className="formBG">
            <Row id="bSel">
                <Col s={12}>
                    <Col s={6}>
                        <h3 className="userheading"><Icon>person</Icon>Project Owner</h3>
                        <Input s={6} label="First Name" />
                        <Input s={6} label="Last Name" />
                    </Col>
                    <Col s={6}>
                        <h3 className="userheading"><Icon>create_new_folder</Icon>Project Name</h3>
                        <Input s={6} label="Project Name" />
                    </Col>
                </Col>
            </Row>
            <Row id="plSel">
                <Col s={12}>
                    <Col s={6}>
                        <Input s={6} type='select' label="Biome Selection">
                            <option value='1'>Desert</option>
                            <option value='2'>Ocean</option>
                            <option value='3'>Forest</option>
                        </Input>
                    </Col>
                    <Col s={6}>
                        <Input s={6} type='select' label="Plant Type">
                            <option value='1'>Vegetative</option>
                            <option value='2'>Flowering</option>
                            <option value='3'>Light cycle</option>
                        </Input>
                    </Col>
                </Col>
            </Row>
        </div> */}
    </div>
)

export default UserSettings;