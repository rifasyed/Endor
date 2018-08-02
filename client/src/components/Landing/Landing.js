import React, { Component } from 'react';
import { Icon, Col, Button, Row } from 'react-materialize';
import './Landing.css';
import Login from '../Login'
import Title from '../Title'
import LandingModals from '../LandingModals'
import Dashboard from '../Dashboard/Dashboard'
import Link from 'react-router'
// import { Redirect } from  'react-router-dom'

function pageChange(e) {
    e.preventDefault();
    window.location.assign('/Dashboard')
}



class Landing extends Component {
    // state = {
    //     redirect: false
    // }

    // handlePageChange = () => {
    //     this.setState({ redirect: true })
    // }

    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/BiomPage'
    //     }
    // }

    render() {
        return (
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
                        <Button onClick={pageChange} large className="newProfBtn"><Icon id="addIcon" left>note_add</Icon>New Project</Button>
                    </Col>
                </Row>
                {/*Login Modal Content*/}
            </div>
        );
    }
}
export default Landing;