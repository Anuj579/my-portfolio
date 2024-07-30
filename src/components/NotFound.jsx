import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/not-found.svg'

const NotFound = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
            <div className='flex flex-col items-center'>
                <img src={pageNotFound} className='w-80' alt="Not Found" />
                <h1 className='text-3xl font-bold mb-3 mt-5'>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <Link to="/" className='my-4 text-secondary font-medium flex items-center'><span>Go to Home</span> <svg xmlns="http://www.w3.org/2000/svg" className='h-[16px] fill-secondary ms-2' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></Link>
            </div>
        </div>
    );
};

export default NotFound;
