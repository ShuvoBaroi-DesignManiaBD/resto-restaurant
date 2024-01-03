import { CgCloseR } from "react-icons/cg"; 
import { BiEdit } from "react-icons/bi"; 
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import toast from 'react-hot-toast';
import TableTd from './TableTd';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@material-tailwind/react';
import Swal from 'sweetalert2';



const TableBody = ({ orders, refetch, isFetching, countOrders }) => {
    const foods = [];
    orders?.map(order => foods.push( ...order.foods))
    console.log(foods, orders);

    const navigate = useNavigate();

    const handleChange = (email, role) => {
        
    }

    const handleCancel = (id) => {

    }

    if (isFetching) {
        return <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div>;
    } else {
        return (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                { orders?.map((order)=>{
                    return order?.foods?.map((food) => {
                        return (
                            <tr key={food?._id || Date.now()}>
                                <td className="h-px w-px whitespace-nowrap">
                                    <div className="ps-6 py-3 pr-4">
                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                            <input
                                                type="checkbox"
                                                className="shrink-0 border-gray-300 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-at-with-checkboxes-1"
                                            />
                                            <span className="sr-only">Checkbox</span>
                                        </label>
                                    </div>
                                </td>
                                <td className="h-px w-px whitespace-nowrap">
                                    <div className="ps-6 py-3 pr-4">
                                        <img src={food?.image} alt={food?.name} />
                                    </div>
                                </td>
    
                                <TableTd text={food?.name}></TableTd>
                                <TableTd text={food?.category}></TableTd>
                                <TableTd text={food?.country}></TableTd>
                                <TableTd text={order?.orderDate || '---'}></TableTd>
                                <TableTd text={`${food?.price || '---'} USD`}></TableTd>
                                <TableTd text={food?.quantity}></TableTd>
                                <TableTd text={`${food?.quantity * food?.price || '---'} USD`}></TableTd>
                                <TableTd text={<CgCloseR className="text-red-800 w-6 h-6" />}
                                icon={<BiEdit className="text-primary w-7 h-7"/>}
                                ></TableTd>
                            </tr>
    
                        );
                    })
                })
                }

            </tbody>
        );
    }

};

export default TableBody;