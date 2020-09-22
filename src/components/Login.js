import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogin } from '../actions/userActions';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props){
    super(props);
    
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(doLogin(this.state.email, this.state.password))
        .then(() => {
          history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { isLoggedIn, message } = this.props;
    //check if already logged in
    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="form">
        <Form onSubmit={this.handleLogin}
        ref={(c) => {
          this.form = c;
        }}
        >
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
                <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
                />
              </li>
              <li>
                <label htmlFor="password">
                Password:
                </label>
                <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
               />
              
              </li>
              <li>
              <button
                className="button primary"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
                
              </li>
              <li>
                New to Shopping Cart ?
              </li>
              <li>
              <Link to="/register" className="button secondary full-width text-center">Create Your Account</Link>
              </li>

              {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
              
             
          </ul>
        </Form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.user;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);
