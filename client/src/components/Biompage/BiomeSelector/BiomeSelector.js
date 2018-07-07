import React, {Fragment} from 'react';
import { Icon, Col } from 'react-materialize';
import Biompage from '../Biompage';



const BiomeSelector = () => (
    <Fragment>
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
    </Fragment>


)



export default BiomeSelector;