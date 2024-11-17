import React, { useState } from 'react'
import { Input } from './components/Input'
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export const Login = () => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const {login,isLoading,error} = useAuthStore()


	const handleLogin = async (e) => {
		e.preventDefault();
    await login(email,password)
	};

  return (
    <div className='auth-container'>
            <div className='inner-auth'>
                <h2>Welcome back</h2>

                <form className='auth-input-container' onSubmit={handleLogin}>
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
                    {error && <p>{error}</p>}
                    <button className='auth-input-btn'  type='submit'>log In</button>
                </form>
            </div>
            <div>
                <p>
                Don't have an account?{" "}{" "}
                    <Link to={"/signup"} >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
  )
}
