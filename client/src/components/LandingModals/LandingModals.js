import React from 'react';
import { Icon, Col, Row, Slider, Slide } from 'react-materialize';
import './LandingModals.css';
import ModalContent from '../ModalContent'



const LandingModals = props => (
    <Row id="coverTags">
        <Slider id="sliderColor">
            <Slide className="slideStyle"
                title="Real-Time Data Monitoring">
                <Icon>devices</Icon>
                Platform provides real-time monitoring of all growth levels including: 
                Temperature, Humidity, Light Spectrum, Growth Cycle, PH (H20), & Nutrient Levels
            </Slide>
            <Slide
                title="Biome Selector"
                placement="left">
                <Icon>terrain</Icon>
                Biome Selector provides an easy way to set the environmental perameters for your growth cycle. 
                Pre-Set Biomes Include: *Desert (10-20% Humidity), *Ocean (40-60% Humidity), *Forest (70-80% Humidity)

            </Slide>
            <Slide
                title="Aeroponic Delivery"
                placement="right">
                <Icon>opacity</Icon>
                Proprietary aeroponic nutriet delivery system improves uptake and shortens flowering times. 
            </Slide>
        </Slider>
        {/* <Col id="gauge" s={4}>
            <ModalContent iconClicker={
                <a id="dialBtn">
                    <Icon medium className="material-icons">devices</Icon>
                </a>
            }
                title="Real-Time Data Monitoring"
                icon="all_inclusive"
                description="Platform provides real-time monitoring of all growth levels including:"
                list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
            />
            <span className="modalnames">DATA MONITORING</span>
        </Col>
        <Col id="mountain" s={4}>
            <ModalContent iconClicker={
                <a id="biomeBtn">
                    <Icon medium className="material-icons">terrain</Icon>
                </a>
            }
                title="Real-Time Data Monitoring"
                icon="all_inclusive"
                description="Platform provides real-time monitoring of all growth levels including:"
                list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
            />
            <span className="modalnames">BIOME SELECTOR</span>
        </Col>
        <Col id="devices" s={4}>
            <ModalContent iconClicker={
                <a id="aeroBtn">
                    <Icon medium className="material-icons">opacity</Icon>
                </a>
            }
                title="Real-Time Data Monitoring"
                icon="all_inclusive"
                description="Platform provides real-time monitoring of all growth levels including:"
                list={["Temperature", "Humidity", "Light Spectrum", "Growth Cycle", "PH (H20)", "Nutrient Levels (H20)"]}
            />
            <span className="modalnames">AEROPONIC DELIVERY</span>
        </Col> */}
    </Row>
)

export default LandingModals
