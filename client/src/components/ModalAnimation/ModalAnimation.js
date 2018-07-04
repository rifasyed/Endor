import React from 'react';
import { Modal, Icon, Col } from 'react-materialize';
import './ModalAnimation.css';



const ModalAnimation = props => {
    // console.log(props.list)
    return (
    <div className="row">
        <Col s={12}>
            <Modal id="madmodal" className= "black lighten-3" data-activities="dialBtn"
                trigger={props.iconClicker}>
                <h5>{props.title}</h5>
                <span className="rollIn" >The ENDOR[ <Icon id="smallInfinity" className="material-icons" >{props.icon}</Icon> ] {props.description}
                    <ul id="animated">
                        {props.list.map(item => <li>{item}</li>)}
                    </ul>
                </span>
            </Modal>
        </Col>
        </div> 
    )
}


export default ModalAnimation;
