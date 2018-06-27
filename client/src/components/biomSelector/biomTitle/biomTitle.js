import React from 'react'
import {Icon, Col} from 'react-materialize';
import './biomTitle.css';

const biomTitle = () => (
<div className="row" id="endorLogo">
<Col s={12}>
    <h1 id="endorWord">
        ENDOR [ <Icon className="material-icons">filter_hdr</Icon> ]
</h1>
    <h5 id="biomWord">
    BIOME SELECTOR
    </h5>
</Col>
</div>
)

export default biomTitle