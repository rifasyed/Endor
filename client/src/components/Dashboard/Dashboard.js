import React from 'react';
import { Row, Col, Card, CardPanel, CardTitle, SideNav, SideNavItem, Button, Icon, Input } from 'react-materialize'
// import { DrawerNavigator} from 'react-navigation'
import ChartJS from '../Chart/ChartJS';
import DataChart from '../DataChart/DataChart';
import DataChart2 from '../DataChart2/DataChart2';
import axios from 'axios';
import './Dashboard.css';
import Switch from '../Switch/Switch'

function pageChange(e) {
  e.preventDefault();
  window.location.assign('/Switch')
}


const Dashboard = () => (
  <div className='dashboardBG'>
    <h1 className="dashHead">DASHBOARD [ <Icon className="iconSize medium">assessment</Icon> ]</h1>
    <Row>
      <SideNav
        id="sideNav"
        trigger={<Button floating large icon="add" id="navBtn"></Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            // background: 'img/office.jpg',
            // image: 'img/yuna.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem onClick={pageChange}>Switches</SideNavItem>
      </SideNav>
      <Col m={12} s={12}>
        {/* <Row>
          <Input name='on' type='switch' value='1' />
        </Row> */}
        <div className="dashDivMain">
          <Row>
            <Col m={3} s={12}>
              <h5>
                TEMP 1 [ <Icon  className="iconSize">ac_unit</Icon> ]
              </h5>
              <Card className='blue-grey tempOneCard' textClassName='white-text' title=' '>
                <DataChart />
                {/* 80.6 °F */}
              </Card>
            </Col>
            <Col m={3} s={12}>
              <h5>
                TEMP 2 [ <Icon>flare</Icon> ]
              </h5>
              <Card className='blue-grey tempOneCard' textClassName='white-text' title=''>
              <DataChart2 />
                {/* 82.4 °F */}
              </Card>
            </Col>
            <Col m={3} s={12}>
              <h5>
                HUMIDITY [ <Icon>cloud_queue</Icon> ]
              </h5>
              <Card className='blue-grey humCard' textClassName='white-text' title=''>
                72.04%
              </Card>
            </Col>
            <Col m={3} s={12}>
              <h5>
                WATER TEMP [ <Icon>invert_colors</Icon> ]
              </h5>
              <Card className='blue-grey waterCard' textClassName='white-text' title=''>
                65 °F
              </Card>
            </Col>
          </Row>

          <Row>
            <Col m={12} s={12}>
              <Card className='blue-grey dataCard' textClassName='white-text' title='Card title'>
                <ChartJS />
              </Card>
            </Col>
          </Row>

          <Row>
            <Col m={6} s={12}>
              <Card className='blue-grey dataCard' id="chartCard" textClassName='white-text' title='Lifesystems Data'>
                I am a very simple card.
              </Card>
            </Col>
            <Col m={6} s={12}>
              <Card className='blue-grey dataCard' textClassName='white-text' title='Card title'>
                I am a very simple card.
              </Card>
            </Col>
          </Row>
          <Row />
        </div >
      </Col >
    </Row >

  </div >
)

export default Dashboard;