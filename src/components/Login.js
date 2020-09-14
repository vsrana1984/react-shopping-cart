import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };

  doLogin = (e) => {
   return true;
    /*e.preventDefault();
    const loginDetails = {
      email: this.state.email,
      password: this.state.password,
    }*/

    //this.props.createOrder(order);
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.doLogin}>
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
             
          </ul>
        </form>
    </div>
    )
  }
}
