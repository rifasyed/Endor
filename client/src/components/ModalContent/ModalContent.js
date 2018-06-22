import React from 'react';
import { Modal, Icon, Col, Button } from 'react-materialize';
import './ModalContent.css'



const ModalContent = () => (
    <div className="row">
        <Col s={12}>
            <Modal id='dialTap' className="tap-target black lighten-3" data-activities="dialBtn"
                trigger={<Button className="tap-target-content"></Button>}>
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
            </Modal>
        </Col>

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
)

export default ModalContent
