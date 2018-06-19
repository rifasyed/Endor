import React from 'react';
import { Icon, Col } from 'react-materialize';
import './Landing.css';
import Login from '../Login'
import Title from '../Title'
import LandingModals from '../LandingModals'

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
        {/* <div id="coverTags" className="row">
            <Col id="gauge" s={4}>
                <a id="dialBtn" >
                    <Icon medium className="material-icons">devices</Icon>
                </a>
                <h6>DATA MONITORING</h6>
            </Col>
            <Col id="mountain" s={4}>
                <a id="biomeBtn" >
                    <Icon medium className="material-icons">terrain</Icon>
                </a>
                <h6>BIOME SELECTOR</h6>
            </Col>
            <Col id="devices" s={4}>
                <a id="aeroBtn" >
                    <Icon medium className="material-icons">opacity</Icon>
                </a>
                <h6>AEROPONIC DELIVERY</h6>
            </Col>
        </div> */}
        {/*Info Modal Content*/}
        {/*Data Modal*/}
        <div className="row">
            <Col s={12}>
                <div id="dialTap" className="tap-target black lighten-3" data-activites="dialBtn">
                    <div className="tap-target-content">
                        <h5 id="realTime">REAL-TIME DATA MONITORING</h5>
                        <p id="monitorPar">The ENDOR[ <Icon id="smallInfinity" className="material-icons">all_inclusive</Icon> ]Platform provides real-time monitoring of all growth levels including:
                        <ul>
                                <li>Temperature</li>
                                <li>Humidity</li>
                                <li>Light Spectrum</li>
                                <li>Growth Cycle</li>
                                <li>PH (H2O)</li>
                                <li>Nutrient Levels (H2O)</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </Col>
            {/*Biome Modal*/}
            <div className="row">
                <Col s={12}>
                    <div id="biomeTap" className="tap-target black lighten-3" data-activates="biomeBtn">
                        <div id="biomeContent" className="tap-target-content">
                            <h5>BIOME SELECTOR</h5>
                            <p id="biomeParagraph">The ENDOR[ <Icon id="smallInfinity" className="material-icons">all_inclusive</Icon> ] Biome Selector provides an easy way to set the environment parameters for your growth cycle. Pre-Set Biomes Include:
                            <ul>
                                    <li>Desert (10-20% Humidity)</li>
                                    <li>Ocean (40-60% Humidity)</li>
                                    <li>Forest (70-80% Humidity)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </Col>
            </div>
        </div>
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
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>ENDOR[ <Icon id="logInShield" className="material-icons">verified_user</Icon> ]</h4>
                <Col s={3}>
                    <div id="logInBox" className="offset-s9 slide-toggle">
                        <div id="username" className="input-field">
                            <Icon className="material icons prefix">vpn_key</Icon>
                            <input id="icon_prefix" type="text" className="form-control"></input>
                            <label for="icon_prefix">USERNAME</label>
                        </div>
                        <div className="input-field">
                            <Icon id="password" className="material-icons prefix">fingerprints</Icon>
                            <input id="icon-prefix" type="password" className="form-control"></input>
                            <label for="icon_prefix">PASSWORD</label>
                        </div>
                    </div>
                </Col>
                <div class="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </div>


    </div>


);


export default Landing;