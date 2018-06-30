import React, { Fragment } from 'react';
import { Icon, Col, Button } from 'react-materialize';
import './Biompage.css';
import Login from '../Login';
import BSTitle from '../BSTitle';
import BiomeModal from '../BiomeModal';
import Form from '../Form/Form';



const Biompage = () => (
  
    <div className='Bpage'>
        <Login />
        <BSTitle />
        <div className="row">
       
            <div id="desertBox">
          
                <Col s={4}>
                <button id="imagebuttonone">
                    <img id="desertImg" src={require("../../assets/desert_w.png")} alt="desert" onClick={this.myfunction} className="responsive-img-class" /></button>
                </Col>
             
            </div>
          
           
            <div id="oceanBox">
       
                <Col s={4}>
                <button id="imagebuttontwo">
                    <img id="oceanImg" src={require("../../assets/ocean_w.png")} alt="ocean" onClick={this.myfunction} className="responsive-img-class" /></button>
                </Col>
            </div>
            <div id="forestBox">
          
                <Col s={4}>
                <button id="imagebuttonthree">
                    <img id="forestImg" src={require("../../assets/forest_w.png")} alt="forest" onClick={this.myfunction} className="responsive-img-class center" /></button>
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
            <Form />
          
        </div>
    </div>
  

)



export default Biompage;