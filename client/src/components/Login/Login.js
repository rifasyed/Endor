import React from 'react'
import { Icon, Col, Modal, Button, Row } from 'react-materialize';
import './Login.css';

const Login = () => (
    <div>
        <Row>
            <div className="col offset-s10">
                <Modal  
                    trigger={<Button icon="verified_user" className="loginBtn"> LOG IN </Button>}>
                        <Col s={3}>
                                <div id="username" className="input-field">
                                    <Icon className="material icons prefix">vpn_key</Icon>
                                    <input id="icon_prefix" type="text" className="form-control"></input>
                                    <label htmlFor="icon_prefix">USERNAME</label>
                                </div>
                                <div className="input-field">
                                    <Icon id="password" className="material-icons prefix">fingerprints</Icon>
                                    <input id="icon-prefix" type="password" className="form-control"></input>
                                    <label htmlFor="icon_prefix">PASSWORD</label>
                                </div>
                                <div id="modfoot">
                                    <a href="#!" className="modal-close waves-effect btn-flat">AGREE</a>
                                </div>
                        </Col>
                </Modal>
            </div>
        </Row>
    </div>
)

export default Login