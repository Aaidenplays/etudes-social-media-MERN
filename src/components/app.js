import React, { Component } from 'react';
import NavBar from './Navbar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainRouter from "./MainRouter"
import Index from "./index";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

//REDUX STUFF
import {Provider} from "react-redux"; 
import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "../reducers";

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      user:{
        id: undefined,
        name: "",
        email: ""
      }
    }
    this.captureUserData = this.captureUserData.bind(this);

  }

  captureUserData(user) {
    this.setState({
      user:{
        id: user._id,
        name: user.name,
        email: user.email
      }
    })
  }

  render() {
    return (
      <div>
      <Provider store={storeWithMiddleware(reducers)}>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" render={() => <Signin captureUser={this.captureUserData}/>} />
            <Route exact path="/" component={Index} />
          </Switch>
        </BrowserRouter>
      </Provider>
      </div>
    );
  }
}
