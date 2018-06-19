import React from 'react';
import { Icon, Col } from 'react-materialize';
import './LandingModals.css';

const LandingModals = () => (
<div id="coverTags" className="row">
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
</div>
)

export default LandingModals