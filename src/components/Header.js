import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { logout } from "../actions/userActions";
import { clearMessage } from "../actions/messageActions";

import { history } from '../helpers/history';

class Header extends Component {
  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: "",
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });

  } 

  componentDidMount() {
    const user = this.props.user;
    console.log(user);
    if (user) {
      
      this.setState({
        currentUser: user,
      });
    }
 
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;

    return (
      <header>
        <Link to="/">React Shopping Cart</Link>
        <div>
          { currentUser ? (
            <>
              { 'Welcome - ' }
              <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
              </Link>
              { '|' }
              <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
              </a>
            </>
          ):(
            <>
              <Link to="/register">Register</Link>
              { '   ' }
              <Link to="/login">Login</Link>
            </>
          )}
        
        </div>          
    </header>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.user;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Header);


