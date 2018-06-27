import React from 'react';
import { Icon, Col } from 'react-materialize';
import './Modal.css';
import BiomeModal from '../BiomeModal'



const BiomeModal = props => (
<div id="coverTags" className="row">
<Col id="gauge" s={4}>
        <BiomeModal iconClicker={
        <a id="dialBtn" className="tap-target-content">
        <Icon medium className="material-icons">devices</Icon>
        </a>
        }
         title="Real-Time Data Monitoring"
         icon="all_inclusive"
         description="Platform provides real-time monitoring of all growth levels including:"
         list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
        />
    <h6>DESERT</h6>
</Col>
<Col id="mountain" s={4}>
        <BiomeModal iconClicker={
        <a id="biomeBtn" className="tap-target-content">
        <Icon medium className="material-icons">terrain</Icon>
        </a>
        }
        title="Real-Time Data Monitoring"
        icon="all_inclusive"
        description="Platform provides real-time monitoring of all growth levels including:"
        list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
        />
    <h6>OCEAN</h6>
</Col>
<Col id="devices" s={4}>
    <BiomeModal iconClicker={
    <a id="aeroBtn" className="tap-target-content" >
        <Icon medium className="material-icons">opacity</Icon>
    </a>
    } 
    title="Real-Time Data Monitoring"
    icon="all_inclusive"
    description="Platform provides real-time monitoring of all growth levels including:"
    list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
    />
    <h6>FOREST</h6>
</Col>
</div>
)

export default BiomeModal