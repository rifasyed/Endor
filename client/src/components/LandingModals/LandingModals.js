import React from 'react';
import { Icon, Col, Modal } from 'react-materialize';
import './LandingModals.css';
import ModalContent from '../ModalContent'



const LandingModals = props => (
<div id="coverTags" className="row">
<Col id="gauge" s={4}>
        <ModalContent iconClicker={
        <a id="dialBtn" className="tap-target-content">
        <Icon medium className="material-icons">devices</Icon>
        </a>
        }
         title="Real-Time Data Monitoring"
         icon="all_inclusive"
         description="Platform provides real-time monitoring of all growth levels including:"
         list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
        />
    <h6>DATA MONITORING</h6>
</Col>
<Col id="mountain" s={4}>
        <ModalContent iconClicker={
        <a id="biomeBtn" className="tap-target-content">
        <Icon medium className="material-icons">terrain</Icon>
        </a>
        }
        title="Real-Time Data Monitoring"
        icon="all_inclusive"
        description="Platform provides real-time monitoring of all growth levels including:"
        list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
        />
    <h6>BIOME SELECTOR</h6>
</Col>
<Col id="devices" s={4}>
    <ModalContent iconClicker={
    <a id="aeroBtn" className="tap-target-content" >
        <Icon medium className="material-icons">opacity</Icon>
    </a>
    } 
    title="Real-Time Data Monitoring"
    icon="all_inclusive"
    description="Platform provides real-time monitoring of all growth levels including:"
    list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
    />
    <h6>AEROPONIC DELIVERY</h6>
</Col>
</div>
)

export default LandingModals