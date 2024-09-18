import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'reactstrap'
import { useAuth } from 'contexts/authContext'
import { Link, useNavigate } from 'react-router-dom'
import './views.css'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, isAuthenticated, errores } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated)
            navigate("/admin/login")
    }, [isAuthenticated]);


    const onSubmit = handleSubmit(async (values) => {
        signUp(values)
    })

    return (
        <div className='content content-form wrapper'>
            <Form
                className='form-login'
                onSubmit={onSubmit}
            >
                {
                    errores.map((err, i) => (
                        <div key={i} >
                            <h1 className='text-required form-group'>
                                {err}
                            </h1>
                        </div>
                    ))
                }
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Nombre'
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && (<p className='text-required'>Nombre is required</p>)}
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Apellido'
                        {...register("apellido", { required: true })}
                    />
                    {errors.apellido && (<p className='text-required'>Apellido is required</p>)}
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Email'
                        {...register("email", { required: true })}
                    />
                    {errors.email && (<p className='text-required'>Email is required</p>)}
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='text'
                        placeholder='Usuario'
                        {...register("user", { required: true })}
                    />
                    {errors.user && (<p className='text-required'>Username is required</p>)}
                </div>
                <div className='form-group'>
                    <input
                        className='input-style text-center'
                        type='password'
                        placeholder='Password'
                        {...register("password", { required: true })}
                    />
                    {errors.password && (<p className='text-required'>Password is required</p>)}
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
                <div className='form-goup'>
                <p className='form-goup'>
                ¿Ya tienes una cuenta? <Link to="/admin/login">Ingresar</Link>
            </p>
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