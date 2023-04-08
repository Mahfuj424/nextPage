import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-70px)] text-gray-500'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-8 rounded-full border-dashed animate-spin mt-5 border-blue-600'></div>
            <p className='text-7xl font-thin'>adding...</p>
        </div>
    );
};

export default LoadingSpinner;