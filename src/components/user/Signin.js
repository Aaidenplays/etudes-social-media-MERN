import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {DBURL} from "../../constants.js";

export class Signin extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // console.log(DBURL)
        await axios.post(`${DBURL}/signin`, {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            this.props.captureUser(res.data.user)
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="signup-container">
            <h2 className="mt-1 mb-5">Signin</h2>

            <Form onSubmit={this.handleSubmit} className="signup-innards">
                <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email"/><br/>
                            <Form.Text className="text-muted">
                                We will never share your email with anyone else
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signin
