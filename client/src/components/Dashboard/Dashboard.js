import React from 'react';
import { Row, Col, Card, CardPanel, CardTitle, SideNav, SideNavItem, Button, Icon } from 'react-materialize'
// import { DrawerNavigator} from 'react-navigation'
import Chart from '../Chart/ChartJS';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => (
  <div className='dashboardBG'>
    <h1 className="dashHead">DASHBOARD</h1>
    <Row>
      <SideNav
      // trigger={<Button floating large icon="add" id="navBtn"></Button>}
      // options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            // background: 'img/office.jpg',
            // image: 'img/yuna.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href='#!icon'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>
      <Col m={2} s={12} />
      <Col m={10} s={12}>
        <div className="dashDivMain">
          <Row>
            <Col m={3} s={12}>
              <h5>
                TEMP 1 [ <Icon className="iconSize">ac_unit</Icon> ]
              </h5>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
              <Chart />
              </Card>
            </Col>
            <Col m={3} s={12}>
              <h5>
                TEMP 2 [ <Icon>flare</Icon> ]
              </h5>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
                I am a very simple card.
              </Card>
            </Col>
            <Col m={3} s={12}>
              <h5>
                HUMIDITY [ <Icon>cloud_queue</Icon> ]
              </h5>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
                I am a very simple card.
              </Card>
            </Col>
            <Col m={3} s={12}>
              <h5>
                WATER TEMP [ <Icon>invert_colors</Icon> ]
              </h5>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
                I am a very simple card.
              </Card>
            </Col>
          </Row>

          <Row>
            <Col m={12} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
                I am a very simple card.
              </Card>
            </Col>
          </Row>

          <Row>
            <Col m={6} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
                I am a very simple card.
              </Card>
            </Col>
            <Col m={6} s={12}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
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