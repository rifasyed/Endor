import React from 'react'
import {Icon, Col} from 'react-materialize';
import './BSTitle.css';

const BSTitle = () => (
<div className="row" id="endorLogo">
<Col s={12}>
    <h1 id="endorWord">
        ENDOR [ <Icon className="material-icons">filter_hdr</Icon> ]
</h1>
    <h5 id="biomWord">
    Biome Selector
    </h5>
</Col>
</div>
)

export default BSTitle