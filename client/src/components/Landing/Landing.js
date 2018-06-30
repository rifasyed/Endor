import React from 'react';
import { Icon, Col, Button, Row } from 'react-materialize';
import './Landing.css';
import Login from '../Login'
import Title from '../Title'
import LandingModals from '../LandingModals'




const Landing = () => (

    <div className='landingBG'>
        {/*Login*/}
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


        {/*Biome Modal*/}


        {/* <ModalContent /> */}

        {/*Breadcrumbs*/}
        <div className="row">

        </div>
        <Row id="newProfile">
            <Col s={12}>
                <Button large className="newProfBtn"><Icon id="addIcon" left>note_add</Icon>New Project</Button>
            </Col>  
        </Row>
        {/*Login Modal Content*/}



    </div>


);


export default Landing;