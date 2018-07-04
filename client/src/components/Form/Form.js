import React, { Component } from 'react';
import { Icon, Col, Button, Row, Input } from 'react-materialize';
import './Form.css';
import DropDownOne from '../DropDownOne';
import DropDownTwo from '../DropDownTwo';
import DropDownThree from '../DropDownThree';


class Form extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Input s={3} placeholder="Project Name" validate>

                    </Input>
                </Row>
                <div>
                    <Button waves='light' node='a' href='#'> Submit </Button>
                </div>
                <div>
                    <DropDownOne />
                    <DropDownTwo />
                    <DropDownThree />
                </div>
            </div>



        )
    }



};


export default Form;