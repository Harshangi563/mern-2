import  { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function  Signup() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) =>  {
        e.preventDefault()
        axios.post('http://localhost:4000/register',{
            username: username,
            password: password
        })
        .then(result =>
             {console.log(result)
             navigate('/login')   


             })
        .catch(err => {
             console.log(err);

        })
        //navigate('/create-ftness')
    };
    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label><strong>Name</strong></label>
                            <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setUsername(e.target.value)}
                            />
    
                            
    
                        </div>
                        <div className="mb-3">
                            <label><strong>Password</strong></label>
                            <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                            />
    
                            
    
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">register</button>
    
                    </form>
                    <p> Already have an account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light">Login</Link>

                    
    
    
                </div>
            </div>
    );
}


export default Signup;