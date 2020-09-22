import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/userActions";

// required validation in textbox
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

//check email validation...
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

//check username validation...
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

//check password validation...
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
    };
  }
//set state username once changed
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
//set state email once changed
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

//set state password once changed
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  //call once submit for registration
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.username, this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className="form">
        <Form onSubmit={this.handleRegister}
        ref={(c) => {
          this.form = c;
        }}
        >

        {!this.state.successful && (
          <ul className="form-container">
            <li>
              <h3>
                Sign Up
              </h3>
            </li>

            <li>
              <label htmlFor="email">
                Username:
              </label>
              <Input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChangeUsername}
              validations={[required, vusername]}
              />
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
              validations={[required, email]}
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
              validations={[required, vpassword]}
            />
            
            </li>
            <li>
            <button className="button primary">Sign Up</button>
              
            </li>
           
        </ul>
        )}  

        {message && (
          <div className="form-group">
            <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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
        </Form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
