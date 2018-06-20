import React from 'react';
import { Icon, Col } from 'react-materialize';
import './Landing.css';
import Login from '../Login'
import Title from '../Title'
import LandingModals from '../LandingModals'
import ModalContent from '../ModalContent'

const Landing = () => (

    <div>
        {/*Login Button*/}
        <div>
            <Login />

        </div>
        
        {/*Logo*/}
        <div>
            <Title />
        </div>

        {/*Info Modal Buttons*/}
        <LandingModals />
        
        {/*Info Modal Content*/}
        {/*Data Modal*/}
        <ModalContent />

        {/*Breadcrumbs*/}
        <div className="row">
            <Col s={12}>
                {/* <a href="#" className="breadcrumb">First</a>
                <a href="#" className="breadcrumb">Second</a>
                <a href="#" className="breadcrumb">Third</a> */}
            </Col>
        </div>
        <div id="newProfile" className="row">
            <Col s={12}>
                <p>NEW PROJECT</p>
                <a id="submit-button" className="btn-floating pulse btn-small waves-effect waves-red white"><Icon id="profileBtn" className="material-icons">add_circle_outline</Icon></a>
            </Col>
        </div>
        {/*Login Modal Content*/}
        {/* <div id="modal1" className="modal">
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
        </div> */}


    </div>


);


export default Landing;