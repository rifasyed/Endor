import React from 'react'
import {Icon, Col} from 'react-materialize';
import './Title.css';

const Title = () => (
<div className="row" id="endorLogo">
<Col className="zoomInDown" id="animated" s={12}>
    <h1 id="endorWord">
        ENDOR [ <Icon className="material-icons">all_inclusive</Icon> ]
</h1>
    <h5>Life Systems</h5>
</Col>
</div>
)

export default Title