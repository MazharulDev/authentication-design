import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const LoginPage = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const email = useRef()
    const password = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        const userEmail = email.current.value;
        const userPassword = password.current.value;
        signInWithEmailAndPassword(userEmail, userPassword)
    }
    if (user) {
        toast.success("login successfull")
        navigate("/successfully")
    }
    if (error) {
        toast.error(error?.message)
    }
    if (loading) {
        return <p className='text-center mt-4 text-white'>Loading...</p>
    }
    return (
        <div className='ml-12 mt-8'>
            <form className='mb-4' onSubmit={handleSubmit}>
                <input className='bg-transparent focus:outline-none p-2 text-gray-300 border-b-2 border-gray-700' type="email" name="" placeholder='Email or Username' ref={email} required />
                <input className='bg-transparent focus:outline-none p-2 mt-4 text-gray-300 border-b-2 border-gray-700' type="password" name="" placeholder='Password' ref={password} required />
                <label className='flex justify-start items-center gap-2 ml-2 mt-5'>
                    <input type="checkbox" className='' />
                    <p className='text-gray-400'>Remember me</p>
                </label>
                <input className='px-6 py-1 text-white mt-5 ml-2 bg-gradient-to-b from-[#45b0a6] to-[#3d8d85] rounded-full hover:text-gray-200 cursor-pointer' type="submit" value="Login" />
            </form>
            <Link to="/forgotpassword" className='mt-4 ml-2 text-gray-200 border-b border-gray-300 hover:text-gray-400 hover:border-gray-400'>&#171; Forgot your Password?</Link>
        </div>
    );
};

export default LoginPage;