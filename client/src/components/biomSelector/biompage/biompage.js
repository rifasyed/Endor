import React from 'react';
import { Icon, Col } from 'react-materialize';
import './biomPage.css';

import biomTitle from '../biomTitle';



const biomPage = () => (

    <div id="endorLogo" className="row">
        <Col s={12}>
            <h1 id="endorWord"> ENDOR [<i className="material-icons">filter_hdr</i> ] </h1>
            <h5 id="biomWord"> BIOME SELECTOR</h5>
        </Col>
    </div>
    <div className="row">
        <div id="desertBox">
            <Col s={4}>
                <img id="desertImg" src="./assets/image/desert_w.png" alt="desert" width="600px" className="responsive-img-class" />
            </Col>
        </div>
        <div id="oceanBox">
            <Col s={4}>
                <img id="oceanImg" src="./assets/image/ocean_w.png" alt="ocean" width="600px" class="responsive-img-class" />
            </Col>
        </div>
        <div id="forestBox">
            <Col s={4}>
                <img id="forestImg" src="./assets/image/forest_w.png" alt="forest" width="600px" class="responsive-img-class center" />
            </Col>
        </div>
    </div>

    <div className="row">
        <Col s={4}>
            <h5 class="biomeTitle" >DESERT</h5>
        </Col>
        <Col s={4}>
            <h5 class="biomeTitle" >OCEAN</h5>
        </Col>
        <Col s={4}>
            <h5 class="biomeTitle" >FOREST</h5>
        </Col>
    </div>



)



export default biomPage;