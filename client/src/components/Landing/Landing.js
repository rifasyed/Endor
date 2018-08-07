import React, { Component } from 'react';
import { Icon, Col, Button, Row } from 'react-materialize';
import './Landing.css';
import Login from '../Login'
import Title from '../Title'
import LandingModals from '../LandingModals'
import { Redirect } from 'react-router'
import Link from 'react-router'
import BiomPage from '../Biompage/Biompage'

function pageChange(e) {
    e.preventDefault();
    window.location.assign('/BiomPage')
}



class Landing extends Component {
    // state: {
    //     redirect: false
    // }
    // handlePageChange() => {
    //     this.setState({ redirect: true })
    // }
    render() {

        // const { redirect } = this.state

        // if (redirect) {
        //     return <Redirect to='/biomPage'
        // }

        return (
            <div className='landingBG bkgTest'>
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


                {/*Login Modal Content*/}
            </div>
        );
    }
}
    export default Landing;