import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="form">
        <form >
          <ul className="form-container">
              <li>
                <h3>
                  Login In
                </h3>
              </li>
            
              <li>
                <label htmlFor="email">
                  Email:
                </label>
                <input type="email" name="email" id="email"></input>
              </li>
              <li>
                <label htmlFor="password">
                Password:
                </label>
                <input type="password" name="password" id="password"></input>
              
              </li>
              <li>
                <button type="submit" className="button primary">Signin</button>
              </li>
              <li>
                New to Shopping Cart ?
              </li>
              <a href="#">Create Your Amazon Account</a>
          </ul>
        </form>
    </div>
    )
  }
}
