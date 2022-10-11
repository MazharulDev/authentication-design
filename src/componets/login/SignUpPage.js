import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUpPage = () => {
    const [
        createUserWithEmailAndPassword,
        emailUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    console.log(emailUser);
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
    }
    if (loading || updating) {
        return <p>Loading...</p>
    }
    return (
        <div className='ml-12 mt-8'>
            <form onSubmit={handleSubmit}>
                <input className='bg-transparent focus:outline-none p-2 text-gray-300 border-b-2 border-gray-700' type="email" name="email" placeholder='Email or Username' ref={email} />
                <input className='bg-transparent focus:outline-none p-2 mt-4 text-gray-300 border-b-2 border-gray-700' type="text" name="username" placeholder='Username' ref={user} />
                <input className='bg-transparent focus:outline-none p-2 mt-4 text-gray-300 border-b-2 border-gray-700' type="password" name="password" placeholder='Password' ref={password} />
                <input className='px-6 py-1 text-white mt-5 ml-2 bg-gradient-to-b from-[#45b0a6] to-[#3d8d85] rounded-full hover:text-gray-200 cursor-pointer' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default SignUpPage;