import React from 'react';

const LoginPage = () => {
    return (
        <div className='ml-12 mt-8'>
            <form>
                <input className='bg-transparent focus:outline-none p-2 text-gray-300 border-b-2 border-gray-700' type="text" name="" placeholder='Email or Username' />
                <input className='bg-transparent focus:outline-none p-2 mt-4 text-gray-300 border-b-2 border-gray-700' type="password" name="" placeholder='Password' />
                <label className='flex justify-start items-center gap-2 ml-2 mt-5'>
                    <input type="checkbox" className='' />
                    <p className='text-gray-400'>Remember me</p>
                </label>
                <input className='px-6 py-1 text-white mt-5 ml-2 bg-gradient-to-b from-[#45b0a6] to-[#3d8d85] rounded-full hover:text-gray-200 cursor-pointer' type="submit" value="Login" />
            </form>
            <button className='mt-4 ml-2 text-gray-200 border-b border-gray-300 hover:text-gray-400 hover:border-gray-400'>&#171; Forgot your Password?</button>
        </div>
    );
};

export default LoginPage;