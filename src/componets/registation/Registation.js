import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Registation = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    if (!user) {
        navigate("/")
    }
    if (error) {
        toast.error(error?.message)
    }
    if (loading) {
        return <p className='text-center mt-4 text-white'>Loading...</p>
    }
    return (
        <div className='h-screen'>
            <div className='w-96 h-[29rem] ml-5 md:ml-60 mt-16 rounded-xl bg-gradient-to-bl from-[#515869] to-[#2c2e38]'>
                <div className='text-center text-2xl pt-5 text-white'>
                    <p>User profile</p>
                </div>
                <div>
                    <p className='text-white text-xl text-center mt-5'>{user?.displayName}</p>
                    <p className='text-center text-white mt-3'>{user?.email}</p>
                </div>
                <div className='flex justify-center'>
                    <button onClick={handleLogout} className='px-6 py-1 text-white mt-5 ml-2 bg-gradient-to-b from-[#45b0a6] to-[#3d8d85] rounded-full hover:text-gray-200 cursor-pointer'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Registation;