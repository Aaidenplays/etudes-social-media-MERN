import React, { Component } from 'react';
import NavBar from './Navbar.js'
import {BrowserRouter} from 'react-router-dom'
import MainRouter from "./MainRouter"

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>
    );
  }
}
