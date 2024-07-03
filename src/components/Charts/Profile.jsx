import React from 'react';
import { Card, Typography } from "@material-tailwind/react"
const TABLE_HEAD = ["Name", "Reservaation", "Purchases"];

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

export default function Profile() {
    return (
        <div className="bg-white shadow-lg rounded-lg px-8 py-5 flex gap-8">
            <img className='w-48 h-48' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
            <Card className="h-[417px] w-full overflow-auto">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='h-[100px] overflow-auto'>
                        {foods.map(({ name, number1, number2 }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {number1}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {number2}
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
