import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChartDiagram from '../../components/Charts/ChartDiagram';
import PieChart from '../../components/Charts/PieChart';
import { MembersTable } from '../../components/Table';
import LineChart from '../../components/Charts/LineChart';
import Balance from '../../components/Charts/Balance';
import Come from '../../components/Charts/come';
import Profile from '../../components/Charts/Profile';
import Userr from '../../components/Charts/Userr';

export default function UserKPI() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='grid grid-cols-12 gap-6 p-6'>
      <div className='col-span-8' data-aos="fade-up" data-aos-delay="400">
        <Userr />
      </div>
      <div className='col-span-4 space-y-6'>
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="w-full h-full bg-white rounded-lg">
            <div className="income px-5 py-3">
              <div className="income w-full flex flex-row justify-between items-center p-1">
                <p className='text-lg'>Total Income</p>
                <div className='bg-gray-200 p-2 rounded-md text-green-700'>
                  <svg className='size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
                </div>
              </div>
              <div className='flex items-center p-1'>
                <h1 className='text-3xl font-semibold'>$50,530.00</h1>
                <p className='text-xs'>(USD)</p>
              </div>
              <p className='text-gray-600 text-xs mt-2 ml-2'><b className='text-light-green-800'>20%</b> increase compared to last week</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <PieChart />
        </div>
      </div>
      <div className='col-span-8 relative bottom-[135px]'>
        <div data-aos="fade-up" className='mb-6'>
          <ChartDiagram />
        </div>
      </div>
      <div className='col-span-12  relative bottom-[135px]'>
        <div data-aos="fade-up" className='mb-6'>
          <Userr />
        </div>
      </div>

    </div>
  );
}
