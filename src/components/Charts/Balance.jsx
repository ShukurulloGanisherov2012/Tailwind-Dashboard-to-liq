import React from 'react';
import 'tailwindcss/tailwind.css';
import { Button } from '@material-tailwind/react';
export default function Balance() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
      <div className="text-gray-700 text-lg font-semibold mb-4">Your balance</div>
      <div className="text-3xl font-bold text-gray-800 mb-2">
        $120,435.00 <span className="text-sm text-gray-500">(USD)</span>
      </div>
      <div className="text-sm text-gray-500 mb-6">From Jan 01 2022 to Jan 31 2022</div>
      <div className="flex space-x-4">
        <Button className="bg-blue-500 text-white flex gap-2 items-center text-sm  font-medium  py-2 px-5 rounded-md hover:shadow hover:bg-blue-600 ">
          $ <p className='h-full flex items-center'>Top Up</p>
        </Button>
        <Button className="bg-white border-[2px] border-blue-500 text-blue-500 text-sm font-medium  py-2 px-5 rounded-md shadow hover:bg-blue-600 transition-all duration-300 hover:text-white">
          Transfer
        </Button>
      </div>
    </div>
  )
}


