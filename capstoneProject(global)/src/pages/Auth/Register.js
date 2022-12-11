import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import CONFIG from "../../Global/Config"
import Cookie from "../../Global/SetCookie"

import bgLogin from './img/bg-login.jpg'

export default function () {

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
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
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter name"
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Re-enter password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div className="d-grid gap-2 mb-3">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
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