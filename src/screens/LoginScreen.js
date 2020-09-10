import React, { Component } from 'react'
import Login from '../components/Login'

export default class LoginScreen extends Component {
  render() {
    return (
      <div>
         <div className="content">
            <div className="main">
              <Login></Login>
            </div>
            <div className="sidebar">
              
            </div>
          </div>
      </div>
    )
  }
}
