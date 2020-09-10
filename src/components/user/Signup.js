import React, { Component } from 'react'
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export class Signup extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
    }

    render() {
        return (
            <div className="signup-container">
                <h2 className="mt-1 mb-5">Signup</h2>

                <Form className="signup-innards">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"/><br/>
                            <Form.Text className="text-muted">
                                We will never share your email with anyone else
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup

