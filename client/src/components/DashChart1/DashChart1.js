import React, { Component, Fragment } from 'react';
// import { Row, Col, Card, CardPanel, CardTitle, SideNav, SideNavItem, Button, Icon } from 'react-materialize'
// import { DrawerNavigator} from 'react-navigation'
// import Chart from '../Chart/ChartJS';
import axios from 'axios';
// import { link } from 'fs';

class DashChart1 extends Component {
    state = {
        charts: []
    }

    componentDidUpdate() {
        axios.get('/temp')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Fragment>
                <h1>hi</h1>

            </Fragment>
        )
    }
}

export default DashChart1;