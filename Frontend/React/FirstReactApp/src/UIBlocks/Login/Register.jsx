import React from 'react';
import {useForm} from 'react-hook-form'
import './Register.css';

function Register() {
    const {register, handleSubmit, formState:{errors}, watch, reset} = useForm()

    const formHandler = (data) => {
        console.log(data)
        reset()
    }

    let password = watch('password')

    console.log(errors)
  return (
    <>
        <section className="register-container">
            <form onSubmit={handleSubmit(formHandler)} className="register-form">
                <h1>Create Account</h1>
                
                <div className="form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" placeholder="John Doe" {...register('fullname', {
                        required : "full name is required"
                    })} />
                    <div className='error'>{errors.fullname && errors.fullname?.message}</div>
                    {/* <div className='success'>{!errors.fullname && "Looks good !"}</div> */}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="example@email.com" {...register('email', {
                        required : "Email field cann't be empty",
                        pattern : {
                            value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message : "Enter a valid email address"
                        }
                    })} />
                    <div className='error'>{errors.email && errors.email?.message}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Min. 8 characters" {...register('password', {
                        required : "Password field cann't be empty",
                        pattern : {
                            value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message : "password must contain min 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
                        }
                    })} />
                    <div className='error'>{errors.password && errors.password?.message}</div>
                </div>

                 <div className="form-group">
                    <label htmlFor="repassword">Re Enter Password</label>
                    <input type="password" id="repassword" placeholder="Min. 8 characters" {...register('repassword', {
                        required : "Re Enter password field cann't be empty",
                        validate : (value) => {
                            if(! (value === password)){
                                return "password mis-match"
                            }
                        }
                    })} />
                    <div className='error'>{errors.repassword && errors.repassword?.message}</div>
                </div>

                <button type="submit" className="register-btn">Register</button>
                
                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </form>
        </section>
    </>
  );
}

export default Register;