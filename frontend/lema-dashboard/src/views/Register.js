import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'reactstrap'
import { registerRequest } from '../api/auth'
import './views.css'

const Register = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        const res = await registerRequest(values)
        console.log(res)
    })

    return (
        <div className='content content-form'>
            <Form
                className='form-login'
                onSubmit={onSubmit}
            >
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Nombre'
                        {...register("nombre")}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Apellido'
                        {...register("apellido")}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Email'
                        {...register("email")}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Usuario'
                        {...register("user")}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='password'
                        placeholder='Password'
                        {...register("password")}
                    />
                </div>
                {/* <FormGroup floating>
                    <input
                    className='input-style text-center'
                    type='password'
                    placeholder='Repeat Password'
                    {...register("repeatPassword")}
                    />
                </FormGroup> */}
                {

                }
                <div className='d-flex justify-content-center'>
                    <Button
                        type="submit"
                        className='button-style'
                    >
                        Registrarse
                    </Button>
                </div>
            </Form>
            {/* <form onSubmit={handleSubmit((values)=>{
                console.log(values)
            })}>
                <input type='text'
                {...register("nombre")}
                />
            <button type='submit'>
                submit
            </button>
            </form> */}
        </div>
    )
}

export default Register