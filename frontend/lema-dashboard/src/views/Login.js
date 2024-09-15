import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap'
import './views.css'


const Login = () => {
    return (
        <div className='content content-form'>
            <Form className='form-login'>
                <FormGroup floating>
                    <input
                        className='input-style text-center'
                        name="user"
                        placeholder="Username"
                        type="text"
                    />
                </FormGroup>
                <FormGroup floating>
                    <input
                        className='input-style text-center'
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </FormGroup>
                <div className='d-flex justify-content-center'>
                    <Button
                        type="submit"
                        className='button-style'
                    >
                        Ingresar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login