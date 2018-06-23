import React from 'react';
import { Modal, Icon, Col } from 'react-materialize';
import './ModalContent.css'



const ModalContent = props => {
    // console.log(props.list)
    return (
    <div className="row">
        <Col s={12}>
            <Modal id='dialTap' className="tap-target black lighten-3" data-activities="dialBtn"
                trigger={props.iconClicker}>
                <h5 id="realTime">{props.title}</h5>
                <span id="monitorPar">The ENDOR[ <Icon id="smallInfinity" className="material-icons" >{props.icon}</Icon> ] {props.description}
                    <ul>
                        {props.list.map(item => <li>{item}</li>)}
                    </ul>
                </span>
            </Modal>
        </Col>
        </div> 
    )
}


export default ModalContent
