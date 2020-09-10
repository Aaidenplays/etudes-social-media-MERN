import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Index from "./index";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

 const mainRouter = () => {
        return (
            <div>
                <Switch>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/" component={Index} />
                </Switch>
            </div>
        )
}

export default mainRouter
