//fetaure 1
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="grid-container">
        <header>
          <Link to="/">React Shopping Cart</Link>
          <Link to="/login">Login</Link>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
  
}

export default App;
