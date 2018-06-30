import React from 'react';
import { Icon, Col } from 'react-materialize';
import './BiomeModal.css';
import ModalAnimation from '../ModalAnimation'



const BiomeModal = props => (
<div id="coverTags" className="row">
<Col id="desertIcon" s={4}>
        <ModalAnimation iconClicker={
        <a id="dialBtn">
        <Icon medium className="material-icons">devices</Icon>
        </a>
        }
         title="Real-Time Data Monitoring"
         icon="all_inclusive"
         description="Platform provides real-time monitoring of all growth levels including:"
         list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
        />
   <span className="modalnames">DESERT</span>
</Col>
<Col id="oceanIcon" s={4}>
        <ModalAnimation iconClicker={
        <a id="biomeBtn">
        <Icon medium className="material-icons">terrain</Icon>
        </a>
        }
        title="Real-Time Data Monitoring"
        icon="all_inclusive"
        description="Platform provides real-time monitoring of all growth levels including:"
        list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
        />
  <span className="modalnames">OCEAN</span>
</Col>
<Col id="forestIcon" s={4}>
    <ModalAnimation iconClicker={
    <a id="aeroBtn">
        <Icon medium className="material-icons">opacity</Icon>
    </a>
    } 
    title="Real-Time Data Monitoring"
    icon="all_inclusive"
    description="Platform provides real-time monitoring of all growth levels including:"
    list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
    />
 <span className="modalnames">FOREST</span>
</Col>
</div>
)

export default BiomeModal