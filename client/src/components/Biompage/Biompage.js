import React from 'react';
import { Icon, Col, Button, Input, Row } from 'react-materialize';
import './Biompage.css';
import Login from '../Login';
import BSTitle from '../BSTitle';
// import BiomeModal from '../BiomeModal';
// import Form from '../Form/Form';
// import FBig from '../FBig';



const Biompage = () => (

    <div className='Bpage'>
        <Login />
        <BSTitle />


        <Row id="projectNameCenter">
            <Col s={12}>
                <h5> Project Name</h5>
                <Input s={12} validate defaultValue='Endor' />

            </Col>
        </Row>
        <Row>
            <div id="fillBoxOne">
                <Col s={6}>
                    <Input s={6} type='select' label='Option' icon='watch_later'>
                        <option value=""></option>
                        <option value='1'>4</option>
                        <option className="black-text" value='2'>5</option>
                        <option value='3'>6</option>
                    </Input>
                </Col>
            </div>
            <div id="fillBoxTwo">
                <Col s={6}>
                    <Input s={6} type='select' label='Option' icon='opacity'>
                        <option value=""></option>
                        <option value='1'>7</option>
                        <option value='2'>8</option>
                        <option value='3'>9</option>
                    </Input>
                </Col>
            </div>
            <div id="fillBoxThree">
                <Col s={6}>
                    <Input s={6} type='select' label='Option' icon='wb_incandescent'>
                        <option value=""></option>
                        <option value='1'>18/6</option>
                        <option value='2'>20/14</option>
                        {/* <option value='3'>Option 3</option> */}
                    </Input>
                </Col>
            </div>

        </Row>


        <Row>
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
        </Row>

        <Row>
            <Col s={4}>
                <h5 className="biomeTitle" >DESERT</h5>
            </Col>
            <Col s={4}>
                <h5 className="biomeTitle" >OCEAN</h5>
            </Col>
            <Col s={4}>
                <h5 className="biomeTitle" >FOREST</h5>
            </Col>
        </Row>
        <div>

            <div>
                <Button id="submitbutton" waves='light' node='a' href='#'> Submit </Button>
            </div>


        </div>

    </div >



)



export default Biompage;