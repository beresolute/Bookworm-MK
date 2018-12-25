import React from 'react';
import {Form, Button, } from "semantic-ui-react";
import Validator from 'validator'
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
    state ={
        data: {
           email: '',
           password: '',
        },
        loading:false,
        erros: {} 
    };

    onChange = e => 
    this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    };

    validate = (data) => {
        const erorrs = {};
        if (!Validator.isEmail(data.email)) erorrs.email = "Invalid email";
        if (!data.password) erorrs.password = "Cant'be blank";     
    }
    render (){
        const {data} = this.state;
        return(
            <Form>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Example@example.com" value={data.email}
                    value ={data.email}
                    onChange={this.onChange}
                    ></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="password" value={data.password}
                    value ={data.password}
                    onChange={this.onChange}
                    ></input>
                </Form.Field>

                <Button primary>
                    Login
                </Button>
            </Form>
        );
    }
}




export default LoginForm;
