import React, { Component } from 'react';
import { Icon, Col, Dropdown, Button, NavItem } from 'react-materialize';
import './DropDownOne.css';

class DropDownOne extends Component {

    render() {
        return (
            <div>
                <Dropdown trigger={
                    <Button>Select</Button>
                }>
                    <NavItem>4</NavItem>
                    <NavItem>5</NavItem>
                    <NavItem>6</NavItem>
                    <NavItem divider />
                </Dropdown>

            </div>

        )
    }



};


export default DropDownOne;