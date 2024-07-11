import React from 'react';



import  { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function  Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) =>  {
        e.preventDefault()
        axios.post('http://localhost:4000/login',{
            username: username,
            password: password
        })
        .then(result =>
             {console.log(result)
                if(result.data === "success"){
                    navigate('/create-fitness');
                }


             })
        .catch(err => {
             console.log(err);

        
            });
            
        };
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Login</h2>
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
                        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
    
                    </form>
                   

                    
    
    
                </div>
            </div>
        );
    }
    
    
    export default Login;