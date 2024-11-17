import React, { useState } from 'react'
import { Input } from './components/Input'
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { PasswordMeter } from './components/PasswordMeter';
import { useAuthStore } from '../../store/authStore';

export const Signup = () => {
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
    const {signup, error, isLoading} = useAuthStore()


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signup(email,password,name)
            navigate('/verify-email')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='auth-container'>
            <div className='inner-auth'>
                <h2>Create Account</h2>

                <form className='auth-input-container' onSubmit={handleSignUp}>
                    <Input 
                        icon={User}
                        type='text'
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                        icon={Mail}
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        icon={Lock}
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <PasswordMeter />
                    <button className='auth-input-btn' type='submit'>Sign Up</button>
                </form>
            </div>
            <div>
                <p>
                    Already have an account?{" "}
                    <Link to={"/login"} >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
