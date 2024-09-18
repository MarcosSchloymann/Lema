import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form } from 'reactstrap';
import { useAuth } from 'contexts/authContext';
import './views.css'
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {
 
    const { 
        register, handleSubmit, formState: { errors } 
    } = useForm();

    const {signIn, errores, isAuthenticated} = useAuth();

    const onSubmit = handleSubmit(async (values) => {
        // console.log(values)
        signIn(values)
    })

    const navigate = useNavigate();
    
    useEffect(() => {
        
        if (isAuthenticated)
            navigate("/admin/dashboard")
    }, [isAuthenticated]);

    return (
        <div className='content content-form wrapper'>
            <Form
                className='form-login'
                onSubmit={onSubmit}
            >
                <h3>Login</h3>
                {
                errores.map((err, i) => (
                    <div key={i} >
                        <h1 className='text-required form-group'>{err}</h1>
                        
                    </div>
                ))
            }
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
                <div className='d-flex justify-content-center'>
                    <Button
                        type="submit"
                    >
                        Ingresar
                    </Button>
                </div>
                <div className='form-goup'>
                <p className='form-goup'>
                ¿No tienes una cuenta aún? <Link to="/admin/register">Registrarse</Link>
            </p>
            </div>
            </Form>
        </div>
    )
}

export default Login