import React, { Component } from 'react';
import { Icon, Col, Button, Row, Input } from 'react-materialize';
import './FBig.css';
import DropDownOne from '../DropDownOne';
import DropDownTwo from '../DropDownTwo';
import DropDownThree from '../DropDownThree';


class FBig extends Component {

    render() {
        return (
            <div>
                <div className="contain">
                    <Row>
                        <h5>Project Name</h5>
                        <Input s={6} placeholder="Endor" validate>

                        </Input>
                        {/* <Input placeholder="Placeholder" s={6} label="Project Name" /> */}
                    </Row>
                    <Row>
                        <h5>Option</h5>
                        <Input s={3} type='select' label='Materialize Select' icon='weekend' defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                    </Row>
                    <Row>
                        <h5>Option</h5>
                        <Input s={3} type='select' label='Materialize Select' icon='weekend' defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                    </Row>
                    <Row>
                    <h5>Option</h5>
                    <Input s={3} type='select' label='Materialize Select' icon='weekend' defaultValue='2'>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </Input>
                </Row>
                {/* <Input s={3} placeholder="Project Name" validate>

                    </Input> */}

                <div>
                    <Button id="submitbutton" waves='light' node='a' href='#'> Submit </Button>
                </div>

            </div >
            
            </div >



        )
    }



};


export default FBig;