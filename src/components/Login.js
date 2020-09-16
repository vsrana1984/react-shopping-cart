import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogin } from '../actions/userActions';

class Login extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };

  doLogin = (e) => {
    e.preventDefault();
    this.props.doLogin(this.state.email, this.state.password);
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.doLogin}>
          <ul className="form-container">
            {
              this.props.user.error !=='' && (
                <div>{this.props.user.error}</div>
              )
            }
              <li>
                <h3>
                  Login In
                </h3>
              </li>
            
              <li>
                <label htmlFor="email">
                  Email:
                </label>
                <input type="email" name="email" id="email" onChange={this.handleInput} required></input>
              </li>
              <li>
                <label htmlFor="password">
                Password:
                </label>
                <input type="password" name="password" id="password" onChange={this.handleInput} required></input>
              
              </li>
              <li>
                <button type="submit" className="button primary">Signin</button>
              </li>
              <li>
                New to Shopping Cart ?
              </li>
              <li>
              <Link to="/register" className="button secondary full-width text-center">Create Your Account</Link>
              </li>
              
             
          </ul>
        </form>
    </div>
    )
  }
}

export default connect(
  (state) => ({
    user: state.user
  }),
  {
    doLogin
  }
  )(Login);
