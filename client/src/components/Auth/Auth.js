import React, { Component } from 'react';
import axios from 'axios';
import 'whatwg-fetch';
import './Auth.css'

import { getFromStorage, setInStorage } from '../../utils/storage';
// import { BADHINTS } from 'dns';

class Auth extends Component {
  state = {
    isLoading: true,
    token: '',
    signInError: '',
    signInEmail: '',
    signInPassword: '',
    signUpFirstName: '',
    signUpLastName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpError: ''
  }
  
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isLoading: true,
  //     token: '',
  //     signInError: '',
  //     signInEmail: '',
  //     signInPassword: '',
  //     signUpFirstName: '',
  //     signUpLastName: '',
  //     signUpEmail: '',
  //     signUpPassword: '',
  //     signUpError: ''
  //   }

    // this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this)
    // this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this)
    // this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this)
    // this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this)
    // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this)
    // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this)

    // this.onSignIn = this.onSignIn.bind(this)
    // this.onSignUp = this.onSignUp.bind(this)
    // this.logout = this.logout.bind(this)

  // }

  componentDidMount() {
    const obj = getFromStorage('the_main_app')
    if (obj && obj.token) {
      const { token } = obj
      // Verify token
      fetch(`/api/account/verify?token= ${token}`)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false
            })
          }
        })
    } else {
      this.setState({
        isLoading: false,
      })
    }
  }


  onInputChange = (event) => {
    let {name, value} = event.target
    this.setState({[name] : value})
  }

  onSignUp= () => {
    console.log('ping')
    axios.get('/test').then(r => {
      console.log(r)
    })
    this.setState({
      isLoading: true
    })
    fetch('/test').then(r => {
      console.log(r.text)
    })
    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      body: {
        firstName: this.state.signUpFirstName, 
        lastName: this.state.signUpLastName,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword
      }
    })
    // console.log(this.state.signUpFirstName)
    // console.log(this.state.signUpLastName)
    // console.log(this.state.signUpEmail)
    // console.log(this.state.signUpPassword)
      // .then(res => res.json())
      .then(json => {
        console.log('json', json)
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName: '',
            signUpLastName: ''
          })
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          })
        }
      })
  }

  onSignIn = () => {

    this.setState({
      isLoading: true
    })

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      // .then(res => res.json())
      .then(json => {
        console.log('json', json)
        if (json.success) {
          setInStorage('the_main_app', { token: json.token })
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token
          })
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          })
        }
      })


  }

  logout() {
    this.setState({
      isLoading: true,
    })
    const obj = getFromStorage('the_main_app')
    if (obj && obj.token) {
      const { token } = obj
      // Verify token
      fetch(`/api/account/logout?token= ${token}`)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false
            })
          }
        })
    } else {
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpError,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state

    if (isLoading) {
      return (<div> <p>Loading...</p> </div>)
    }

    if (!token) {
      return (
        <div id="authBG">
          <div>
            {
              (signInError) ? (
                <p>{this.state.signInError}</p>
              ) : null
            }
            <p>Sign In</p>
            <input
            name='signInEmail'
              type="email"
              placeholder="Email"
              value={this.state.signInEmail}
              onChange={this.onInputChange}
            />
            <br />
            <input
            name='signInPassword'
              type="password"
              placeholder="Password"
              value={this.state.signInPassword}
              onChange={this.onInputChange}
            />
            <br />
            <button onClick={this.onSignIn}>Sign In</button>
          </div>
          <br />
          <br />
          <div>
            {
              (signUpError) ? (
                <p>{signInError}</p>
              ) : null
            }
            <p>Sign Up</p>
            <input
            name='signUpFirstName'
              type="text"
              placeholder="First Name"
              value={this.state.signUpFirstName}
              onChange={this.onInputChange}
            />
            <br />
            <input
            name='signUpLastName'
              type="text"
              placeholder="Last Name"
              value={this.state.signUpLastName}
              onChange={this.onInputChange}
            />
            <br />
            <input
            name='signUpEmail'
              type="email"
              placeholder="Email"
              value={this.state.signUpEmail}
              onChange={this.onInputChange}
            />
            <br />
            <input
            name='signUpPassword'
              type="password"
              placeholder="Password"
              value={this.state.signUpPassword}
              onChange={this.onInputChange}
            />
            <br />
            <button onClick={this.onSignUp}>Sign Up</button>
          </div>
        </div>
      )
    }

    return (
      <div>
        <p>Account</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}


export default Auth;