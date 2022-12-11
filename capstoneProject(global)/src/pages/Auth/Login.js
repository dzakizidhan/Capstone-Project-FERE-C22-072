import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import CONFIG from "../../Global/Config"
import Cookie from "../../Global/SetCookie"

import bgLogin from './img/bg-login.jpg'

export default function () {

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [error,setError] = useState({
        message: '',
        email: '',
        password: ''
    })

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleError = (data) => {
        setError((error) => ({
            ...error,
            ...data
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(CONFIG.API_URL('/login'),{
              email: email,
              password: password
            },{
            headers: {
                Accept: "application/json",
            }
        })
        .then((res) => {
            let response = res.data
            handleError({
                email: '',
                password: ''
            })
            if(response.status){
                Cookie.set(CONFIG.TOKEN_KEY,response.data.token)
                window.location = '/'
            }else{
                handleError({
                    message: response.message
                })
            }
           
        } )
        .catch((err) => {
            let response = err.response.data
            if(response.errors)
            {
                if(response.errors.email)
                {
                    let _error = response.errors.email
                    handleError({
                        email: _error
                    })
                }
                if(response.errors.password)
                {
                    let _error = response.errors.password
                    handleError({
                        password: _error
                    })
                }
            }
        })


    }

    if(Cookie.get(CONFIG.TOKEN_KEY))
    {
        return (<Navigate to="/"/>)
    }
    
    return (
      <div className="container">
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-8 p-5">
                <img src={bgLogin} alt="" width="90%"/>
            </div>
          <div className="col-md-4 mx-auto py-5 my-5 d-flex align-items-center">
            <div className="card shadow-sm border-0 flex-1 w-100">
                <div className="card-body py-5">
                    <h3 className="Auth-form-title">Sign In</h3>
                    {error.message? <div className="alert alert-danger text-center">{error.message}</div> : ''}
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={handleEmail}
                        />
                        <small className="text-danger">{error.email}</small>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={handlePassword}
                        />
                        <small className="text-danger">{error.password}</small>
                    </div>
                    <p className="text-end mb-3">
                        Forgot <a href="#" className="text-decoration-none">password?</a>
                    </p>
                    <div className="d-grid gap-2 mb-3">
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                    <div className="text-center">
                        Not registered yet?{" "}
                        <Link to="/register" className="text-decoration-none">
                            Sign Up
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </form>
      </div>
    )
}