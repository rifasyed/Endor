import React from 'react';
import { Icon, Col, Button } from 'react-materialize';
import './Landing.css';
import Login from '../Login'
import Title from '../Title'
import LandingModals from '../LandingModals'




const Landing = () => (

    <div className='landingBG'>
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


        {/*Biome Modal*/}


        {/* <ModalContent /> */}

        {/*Breadcrumbs*/}
        <div className="row">

        </div>
        <div id="newProfile" className="row">
            <Col s={12}>
                <Button large className="newProfBtn"><Icon id="addIcon" left>note_add</Icon>New Profile</Button>
            </Col>  
        </div>
        {/*Login Modal Content*/}



    </div>


);


export default Landing;