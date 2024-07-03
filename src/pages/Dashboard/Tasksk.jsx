import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@material-tailwind/react';

export default function Products() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const foods = [
    {
      id: 1,
      name: 'Frozen yoghurt',
      number1: '159',
      number2: '6'
    },
    {
      id: 2,
      name: 'Ice cream sandwich',
      number1: '237',
      number2: '9'
    },
    {
      id: 3,
      name: 'Eclair',
      number1: '262',
      number2: '16'
    },
    {
      id: 4,
      name: 'Cupcake',
      number1: '305',
      number2: '3.7'
    },
    {
      id: 5,
      name: 'Marshmallow',
      number1: '318',
      number2: '0'
    },
    {
      id: 6,
      name: 'Gingerbread',
      number1: '356',
      number2: '16'
    },
    {
      id: 7,
      name: 'Nougat',
      number1: '360',
      number2: '19'
    },
    {
      id: 8,
      name: 'Jelly Bean',
      number1: '375',
      number2: '0'
    },
    {
      id: 9,
      name: 'Lollipop',
      number1: '392',
      number2: '0.2'
    },
    {
      id: 10,
      name: 'Honeycomb',
      number1: '408',
      number2: '3.2'
    },
    {
      id: 11,
      name: 'Oreo',
      number1: '437',
      number2: '18'
    },
    {
      id: 12,
      name: 'Donut',
      number1: '452',
      number2: '25'
    },
    {
      id: 13,
      name: 'KitKat',
      number1: '518',
      number2: '26'
    }
  ];

  const [filteredFoods, setFilteredFoods] = useState(foods);


  const handleFilter = (event) => {
    const value = event.target.value;
    if (value === 'all') {
      setFilteredFoods(foods);
    } else {
      setFilteredFoods(foods.slice(0, parseInt(value, 10)));
    }
  };

  

  return (
    <div className='flex flex-col w-full p-6'>
      <div className="cards bg-white w-full rounded-md py-5">
        
        {filteredFoods.map(food => (
          <div key={food.id} className="card w-full bg-white border-b-2 border-b-gray-300 p-4 text-sm flex justify-between">
            <h1>{food.name}</h1>
            <div className="nums flex gap-28 w-[150px]">
              <h1>{food.number1}</h1>
              <h1>{food.number2}</h1>
            </div>
          </div>
        ))}
        <div className="filterCards  flex gap-5 justify-center mt-5">
          <div className="flex gap-3">
            <h1>Rows per page:</h1>
            <select className='focus:bg-gray-200 px-2 py-1' onChange={handleFilter}>
              <option className='bg-white' value="all">All</option>
              <option className='bg-white' value="5">5</option>
              <option className='bg-white' value="7">7</option>
              <option className='bg-white' value="10">10</option>
            </select>
          </div>
          <div className="pagecount">
            <h1>1-{filteredFoods.length} of {foods.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
