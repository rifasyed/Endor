import React from 'react'
import { Modal, Icon, Col, Button } from 'react-materialize';
import './Login.css';

const Login = () => (
    <div>
        <div className="row">
            <div className="col offset-s10">
                <a id="logInButton" className="waves-effect waves-red btn modal-trigger" href="#modal1">
                    LOG IN [ <i id="logInShield" className="material-icons">verified_user</i> ]
    </a>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>ENDOR[ <Icon id="logInShield" className="material-icons">verified_user</Icon> ]</h4>
                        <Col s={3}>
                            <div id="logInBox" className="offset-s9 slide-toggle">
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
                            </div>
                        </Col>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Login