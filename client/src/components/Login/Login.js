import React from 'react'
import { Icon, Col, Modal, Button } from 'react-materialize';
import './Login.css';

const Login = () => (
    <div>
        <div className="row">
            <div className="col offset-s10">
                <Modal
                    trigger={<Button> LOG IN <Icon id="logInShield" className="material-icons">verified_user</Icon></Button>}>
                        <Col s={3}>
                            <div id="logInBox" className="offset-s9 slide-toggle login-form">
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
                                {/* <div className="login-submit">
                                    <button htmlFor="icon_prefix">SUBMIT</button>
                                </div> */}
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                                </div>
                            </div> 
                        </Col>
                </Modal>
            </div>
        </div>
    </div>
)

export default Login