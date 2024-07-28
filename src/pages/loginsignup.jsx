import React, { useState } from 'react';
import './CSS/LoginSignup.css'

const Loginsignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:"",
        agree: false
    });
    const [error, setError] = useState("");

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value});
    };

    const validateForm = () => {
        if (state === "Sign Up" && formData.username.trim() === "") {
            setError("Username cannot be empty");
            return false;
        }
        if (formData.email.trim() === "" || !formData.email.includes("@")) {
            setError("Please enter a valid email address");
            return false;
        }
        if (formData.password.trim() === "" || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            setError("Password must contain at least one special character");
            return false;
        }
        if (state === "Sign Up" && !formData.agree) {
            setError("Please agree to the terms and conditions");
            return false;
        }
        return true;
    };

    const login = async () => {
        if (!validateForm()) return;
        console.log("Login function Executed",formData);
        let responseData;
        await fetch ('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data);

        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors);
        } 
    };

    const signup = async () => {
        if (!validateForm()) return;
        console.log("Signup function Executed",formData);
        let responseData;
        await fetch ('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data);

        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors);
        }
    };

    return ( 
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                {error && <p className="error">{error}</p>}
                <div className="loginsignup-fields">
                    {state==="Sign Up" && 
                        <input
                            name="username"  
                            value={formData.username}
                            onChange={changeHandler} 
                            type="text" 
                            placeholder="Your Name"
                        />
                    }
                    <input 
                        name="email" 
                        value={formData.email} 
                        onChange={changeHandler} 
                        type="email" 
                        placeholder="Email Address"
                    />
                    <input 
                        name="password" 
                        value={formData.password} 
                        onChange={changeHandler} 
                        type="password" 
                        placeholder="Password"
                    />
                </div>
                {state === "Sign Up" && 
                    <div className="loginsignup-agree">
                        <input 
                            type="checkbox" 
                            name="agree" 
                            id="agree" 
                            checked={formData.agree} 
                            onChange={changeHandler} 
                        />
                        <label htmlFor="agree">
                            By continuing, I agree to the terms of use & privacy policy.
                        </label>
                    </div>
                }
                <button onClick={() => (state === "Login" ? login() : signup())}>Continue</button>
                {state === "Sign Up" ?  
                    <p className="loginsignup-login">
                        Already have an account? 
                        <span onClick={() => setState("Login")}>login here</span>
                    </p> 
                    :
                    <p className="loginsignup-login">
                        Create an account? 
                        <span onClick={() => setState("Sign Up")}>Click here</span>
                    </p>
                }
            </div>
        </div>
    );
};

export default Loginsignup;
