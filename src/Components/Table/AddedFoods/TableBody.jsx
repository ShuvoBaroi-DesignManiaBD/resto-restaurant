import { BiEdit } from "react-icons/bi"; 
import { BiTrash } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import toast from 'react-hot-toast';
import TableId from './TableId';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import { deleteOrder } from "../../../APIs/orders";



const TableBody = ({ foods, refetch, isFetching, foodsCount, convertSeconds }) => {
    // const foods = [];
    // orders?.map(order => foods.push(...order.foods))
    console.log(foods);

    const navigate = useNavigate();

    const handleChange = (email, role) => {

    }

    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                deleteOrder(id)
                    .then(()=>refetch())
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
            }
        });
    }

    if (isFetching) {
        return <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div>;
    } else {
            return (
                <tbody className="divide-y text-center divide-gray-200 dark:divide-gray-700">
                    {foods?.length === 0 ?
                        <tr>
                            <td colSpan="100%" className="h-32">
                                <p className='mx-auto text font-normal text-textColor col-span-4'>
                                    You haven't ordered any food yet!
                                </p>
                            </td>
                        </tr> :
                    foods.map((food) => {
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

                        <TableId text={food?.name}></TableId>
                        <TableId text={food?.category}></TableId>
                        <TableId text={food?.country}></TableId>
                        <TableId text={food?.quantity}></TableId>
                        {/* <TableId secondsToDate={() => convertSeconds(food?.orderDate) || '---'}></TableId> */}
                        <TableId text={`${food?.price || '---'} USD`}></TableId>
                        {/* <TableId text={food?.cartQuantity}></TableId> */}
                        {/* <TableId text={`${food?.total || '---'} USD`}></TableId> */}
                        <TableId text={<button className="flex gap-1.5 items-center justify-center text-primary"
                            onClick={() => handleCancel(food?._id)}
                        > <BiEdit className="w-7 h-7"/></button>}
                        ></TableId>
                    </tr>
                    )

                    })}

                </tbody>
            );
    }


}


export default TableBody;