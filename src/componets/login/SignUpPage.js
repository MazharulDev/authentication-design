import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const SignUpPage = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        emailUser,
        loading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const email = useRef()
    const user = useRef()
    const password = useRef()
    const handleSubmit = async e => {
        e.preventDefault()
        const userEmail = email.current.value;
        const userName = user.current.value;
        const userPassword = password.current.value;
        await createUserWithEmailAndPassword(userEmail, userPassword)
        await updateProfile({ displayName: userName })
        localStorage.setItem("email", userEmail)
    }
    if (emailUser) {
        toast.success("Signup successfull")
        navigate("/successfully")
    }
    if (loading || updating) {
        return <p className='text-center mt-4 text-white'>Loading...</p>
    }
    if (emailError) {
        toast.error(emailError?.message)
    }
    return (
        <div className='ml-12 mt-8'>
            <form onSubmit={handleSubmit}>
                <input className='bg-transparent focus:outline-none p-2 text-gray-300 border-b-2 border-gray-700' type="email" name="email" placeholder='Email or Username' ref={email} required />
                <input className='bg-transparent focus:outline-none p-2 mt-4 text-gray-300 border-b-2 border-gray-700' type="text" name="username" placeholder='Username' ref={user} required />
                <input className='bg-transparent focus:outline-none p-2 mt-4 text-gray-300 border-b-2 border-gray-700' type="password" name="password" placeholder='Password' ref={password} required />
                <input className='px-6 py-1 text-white mt-5 ml-2 bg-gradient-to-b from-[#45b0a6] to-[#3d8d85] rounded-full hover:text-gray-200 cursor-pointer' type="submit" value="Signup" />
            </form>
        </div>
    );
};

export default SignUpPage;