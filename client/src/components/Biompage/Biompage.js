import React, { Fragment } from 'react';
import { Icon, Col } from 'react-materialize';
import './Biompage.css';
import BSTitle from '../BSTitle';

import Login from '../Login';


const Biompage = () => (
    <div>
        <Login />
        <BSTitle />
        <div className="row">
            <div id="desertBox">
                <Col s={4}>
                    <img id="desertImg" src={require("../../assets/desert_w.png")} alt="desert" className="responsive-img-class" />
                </Col>
            </div>
            <div id="oceanBox">
                <Col s={4}>
                    <img id="oceanImg" src={require("../../assets/ocean_w.png")} alt="ocean" className="responsive-img-class" />
                </Col>
            </div>
            <div id="forestBox">
                <Col s={4}>
                    <img id="forestImg" src={require("../../assets/forest_w.png")} alt="forest" className="responsive-img-class center" />
                </Col>
            </div>
        </div>

        <div className="row">
            <Col s={4}>
                <h5 className="biomeTitle" >DESERT</h5>
            </Col>
            <Col s={4}>
                <h5 className="biomeTitle" >OCEAN</h5>
            </Col>
            <Col s={4}>
                <h5 className="biomeTitle" >FOREST</h5>
            </Col>

          
        </div>
    </div>


)



export default Biompage;