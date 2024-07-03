import React from 'react';
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Transaction", "Date ⇩", "Amount ⇩", "Status ⇩"];

const foods = [
    {
      id: 1,
      name: 'Frozen yoghurt',
      number1: '159',
      number2: '6',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Ice cream sandwich',
      number1: '237',
      number2: '9',
      status: 'Panding'
    },
    {
      id: 3,
      name: 'Eclair',
      number1: '262',
      number2: '16',
      status: 'On Hold'
    },
    {
      id: 4,
      name: 'Cupcake',
      number1: '305',
      number2: '3.7',
      status: 'Completed'
    },
    {
      id: 5,
      name: 'Marshmallow',
      number1: '318',
      number2: '0',
      status: 'Panding'
    },
    {
      id: 6,
      name: 'Gingerbread',
      number1: '356',
      number2: '16',
      status: 'On Hold'
    },
    {
      id: 7,
      name: 'Nougat',
      number1: '360',
      number2: '19',
      status: 'Completed'
    }
];

export default function Profile() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'text-green-500'; 
            case 'Panding':
                return 'text-yellow-500'; 
            case 'On Hold':
                return 'text-red-500'; 
            default:
                return 'text-gray-200'; 
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg px-8 py-5 flex gap-8">
            <Card className="h-[417px] w-full overflow-hidden">
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
                        {foods.map(({ id, name, number1, number2, status }) => (
                            <tr className="even:bg-blue-gray-50/50">
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
                                <td className={`p-4 ${getStatusColor(status)} rounded-md`}>
                                    <Typography variant="small" className="font-normal">
                                        {status}
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
