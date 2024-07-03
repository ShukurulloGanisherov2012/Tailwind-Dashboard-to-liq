import React from 'react';
import 'tailwindcss/tailwind.css';
import { Button } from '@material-tailwind/react';


export default function Come() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full flex">
            <div className="income w-1/2 border-r-2 border-gray-500 px-3">
                <div className="incomerow w-full flex flex-row justify-between items-center ">
                    <p className='text-lg'>Total Income</p>
                    <div className='bg-gray-200 p-2 rounded-md text-green-700'>
                        <svg className='size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-semibold'>$50,530.00</h1>
                    <p className='text-xs'>(USD)</p>
                </div>
                <p className='text-gray-600 text-xs mt-2'><b className='text-light-green-800'>20%</b> increase compared to last week</p>
            </div>
            <div className="income w-1/2 px-3">
                <div className="incomerow w-full flex flex-row justify-between items-center ">
                    <p className='text-lg'>Total Expence</p>
                    <div className='bg-gray-200 p-2 rounded-md text-red-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-semibold'>$19,760.00</h1>
                    <p className='text-xs'>(USD)</p>
                </div>
                <p className='text-gray-600 text-xs mt-2'><b className='text-red-800'>10%</b> increase compared to last week</p>
            </div>
        </div>
    )
}


