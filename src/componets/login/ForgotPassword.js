import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const email = useRef();
    const handleSubmit = e => {
        e.preventDefault()
        const userEmail = email.current.value;
        sendPasswordResetEmail(userEmail);
        toast.success("Reset link send successfully on your email")
        email.current.value = ''
    }
    if (sending) {
        return <p className='text-center mt-4 text-white'>Loading...</p>
    }
    if (error) {
        toast.error(error?.message)
    }
    return (
        <div className='ml-12 mt-8'>
            <h2 className='my-4 text-2xl font-bold text-gray-300'>Password Recovery</h2>
            <p className='my-3 text-gray-300'>Enter either the email address on the account and click the submit</p>
            <p className='mb-3 text-gray-300'>We'll email introductions on how to reset your password</p>
            <form className='mb-4' onSubmit={handleSubmit}>
                <input className='bg-transparent focus:outline-none p-2 text-gray-300 border-b-2 border-gray-700' type="email" name="" placeholder='Enter Email or Username' ref={email} required />
                <input className='px-6 py-1 text-white mt-5 ml-2 bg-gradient-to-b from-[#45b0a6] to-[#3d8d85] rounded-full hover:text-gray-200 cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ForgotPassword;