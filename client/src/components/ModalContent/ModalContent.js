import React from 'react';
import { Modal, Icon, Col, Button } from 'react-materialize';
import PropTypes from 'prop-types'
import './ModalContent.css';



const ModalContent = props => {
    // console.log(props.list)
    return (
    <div className="row">
        <Col s={12}>
            <Modal id="madmodal" data-activities="dialBtn"
                trigger={props.iconClicker}>
                    <h5 className="fadeIn" id="animated2">{props.title}</h5>
                    <span className="fadeIn" id="animated">The ENDOR[ <Icon id="smallInfinity" className="material-icons" >{props.icon}</Icon> ] {props.description}
                    <ul className="fadeIn" id="animated1">
                        {props.list.map(item => <li>{item}</li>)}
                    </ul>
                </span>
            </Modal>
        </Col>
        </div> 
    )
}


export default ModalContent;
