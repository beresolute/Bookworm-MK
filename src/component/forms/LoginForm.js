import React from 'react';
import {Form, Button, Label} from "semantic-ui-react";

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
