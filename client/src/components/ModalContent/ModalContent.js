import React from 'react';
import { Modal, Icon, Col, Button } from 'react-materialize';
import './ModalContent.css'



const ModalContent = props => {
    console.log(props.list)
    return (
    <div className="row">
        <Col s={12}>
            <Modal id='dialTap' className="tap-target black lighten-3" data-activities="dialBtn"
                trigger={props.iconClicker}>
                <h5 id="realTime">{props.title}</h5>
                <span id="monitorPar">The ENDOR[ <Icon id="smallInfinity" className="material-icons" >{props.icon}</Icon> ] {props.description}
                    <ul>
                        {props.list.map(item => <li>{item}</li>)}
                    </ul>
                </span>
            </Modal>
        </Col>
        </div> 
    )
}
    {/* <div className="row">
        <Col s={12}>
            <Modal id='dialTap' className="tap-target black lighten-3" data-activities="dialBtn"
                trigger={props.myIcon}>
                <h5 id="realTime">REAL-TIME DATA MONITORING</h5>
                <span id="monitorPar">The ENDOR[ <Icon id="smallInfinity" className="material-icons" >all_inclusive</Icon> ]Platform provides real-time monitoring of all growth levels including:
                    <ul>
                        <li>Temperature</li>
                        <li>Humidity</li>
                        <li>Light Spectrum</li>
                        <li>Growth Cycle</li>
                        <li>PH (H2O)</li>
                        <li>Nutrient Levels (H2O)</li>
                    </ul>
                </span>
            </Modal>
        </Col> */}

        {/* <div className="row">
            <Col s={12}>
                <div id="biomeTap" className="tap-target black lighten-3" data-activates="biomeBtn">
                    <div id="biomeContent" className="tap-target-content">
                        <h5>BIOME SELECTOR</h5>
                        <span id="biomeParagraph">The ENDOR[ <Icon id="smallInfinity" className="material-icons">all_inclusive</Icon> ] Biome Selector provides an easy way to set the environment parameters for your growth cycle. Pre-Set Biomes Include:
                            <ul>
                                <li>Desert (10-20% Humidity)</li>
                                <li>Ocean (40-60% Humidity)</li>
                                <li>Forest (70-80% Humidity)</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </Col>
        </div> */}

export default ModalContent
