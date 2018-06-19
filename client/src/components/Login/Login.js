import React from 'react'
import {Icon, Col} from 'react-materialize';
import './Login.css';

const Login = () => (
<div>
<div className="row">
<div className="col offset-s10">
    <a id="logInButton" className="waves-effect waves-red btn modal-trigger" href="#modal1"> 
        LOG IN [ <i id="logInShield" className="material-icons">verified_user</i> ] 
    </a>
</div>
</div>
</div> 
)

export default Login