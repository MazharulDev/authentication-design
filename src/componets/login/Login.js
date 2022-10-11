import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Login = () => {
    return (
        <div className='h-screen'>
            <div className='w-1/4 h-4/6 ml-60 mt-16 rounded-xl bg-gradient-to-bl from-[#515869] to-[#2c2e38]'>
                <div className='flex justify-around items-center pt-16'>
                    <CustomLink to="/" className='text-gray-200 hover:text-gray-400'>Login</CustomLink>
                    <CustomLink to="signup" className='text-gray-200 hover:text-gray-400'>Sign Up</CustomLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Login;