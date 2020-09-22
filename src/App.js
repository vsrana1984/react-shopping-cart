//fetaure 1
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Header from './components/Header';


export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="grid-container">
        <Header></Header>
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
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



