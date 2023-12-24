import { CgClose } from "react-icons/cg"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "./Login";
import CenterAligned from "../Components/Layouts/CenterAligned";
import { useState } from "react";
import { getCartItems } from "../Hooks/localStorage";

const Order = () => {
    const food = getCartItems();
    // let { state: food } = useLocation();
    const [total, setTotal] = useState(food?.price || 0)
    const [cart, setCart] = useState(true)
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(food);

    const calculateTotal = (quantity) => {
        const result = quantity * food.price || 0;
        setTotal(result)
    }

    const removeFood = () => {
        setCart(!cart);
        
    }

    return (
        <section className="bg-[#F5F8FF] lg:py-10 py-10 px-4">
            <CenterAligned className="max-w-screen-2xl flex flex-col justify-center items-center">
                <h2 className="primaryHeading text-center mb-10">
                    Secure order
                </h2>
                <div className="w-[100%] grid grid-cols-6 gap-5">
                    <div className="flex flex-col w-full lg:col-span-4 gap-5">
                        <div className="bg-white p-6 rounded-lg leading-5">
                            <h4 className="uppercase mb-4 text-base font-semibold">1. Review your order</h4>
                            {(cart && food)?<div className="grid grid-cols-6 gap-3 border-b pb-4">
                                <img src={food?.image} alt="food image" className="col-span-1 rounded-md" />
                                <div className="col-span-4">
                                    <h5 className="text-sm font-medium">{food?.name}</h5>
                                    <p className="text-[12px]">Category: <span>{food?.category}</span></p>
                                    <p className="text-[12px]">Items left: <span>{food?.quantity}</span></p>
                                    <p className="text-[12px]">Qty: <input type="number" step={0} 
                                    max={food?.quantity} defaultValue={1} 
                                    min={1} onChange={(e)=> calculateTotal(e.target.value)}
                                    className="text-[14px] mt-3 font-medium ring-1 pl-3 ring-blue-gray-100 rounded-sm"/></p>
                                </div>
                                <div className="h-full flex flex-col justify-between items-end">
                                    <button onClick={()=>removeFood()} className="cursor-pointer"><CgClose /></button>
                                    <p className="text-sm font-medium">${food?.price} USD</p>
                                </div>
                            </div> :
                            <p className="border-b py-5">Please choose a food!</p>
                            }
                            <div className="flex w-full justify-between">
                            <h4 className="pt-3 flex justify-between text-justify">Subtotal</h4>
                            <h4 className="pt-3 flex justify-between text-justify font-semibold text-primary">${total} USD</h4>
                            </div>
                            
                        </div>
                        <div className="bg-white p-6 rounded-lg">
                            <h4 className="uppercase">2. Delivery addres</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg">
                            <h4 className="uppercase">2. Delivery addres</h4>
                        </div>
                    </div>
                </div>
            </CenterAligned>
        </section>
    );
}


export default Order;