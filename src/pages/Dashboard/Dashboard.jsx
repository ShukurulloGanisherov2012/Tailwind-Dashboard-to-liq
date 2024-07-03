import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChartDiagram from '../../components/Charts/ChartDiagram';
import PieChart from '../../components/Charts/PieChart';
import { MembersTable } from '../../components/Table';
import LineChart from '../../components/Charts/LineChart';
import Balance from '../../components/Charts/Balance';
import Come from '../../components/Charts/come';

export default function Dashboard() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='grid grid-cols-12 gap-6 p-6'>
      <div className='col-span-8'>
        <div data-aos="fade-up" className='mb-6'>
          <ChartDiagram />
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className='mb-6'>
          <MembersTable />
        </div>
        <div data-aos="fade-up" data-aos-delay="1">
        <Come />
      </div>
      </div>

      <div className='col-span-4 space-y-6'>
        <div data-aos="fade-up" data-aos-delay="600">
          <Balance  />
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <PieChart />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <LineChart />
        </div>
        
      </div>

      
    </div>
  );
}
