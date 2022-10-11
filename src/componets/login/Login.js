import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-screen'>
            <div className='w-1/4 h-4/6 ml-60 mt-16 rounded-xl bg-gradient-to-bl from-[#515869] to-[#2c2e38]'>
                <div className='flex justify-around items-center pt-16'>
                    <Link to="/" className='text-gray-200 hover:text-gray-400'>Login</Link>
                    <Link to="signup" className='text-gray-200 hover:text-gray-400'>Sign Up</Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Login;