import { MdAddShoppingCart } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { NavLink, Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating'
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { useAuth } from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { saveToCart } from "../Hooks/localStorage";
import { addToCart } from "../APIs/cart";
import { useState } from "react";
import { getFood } from "../APIs/foods";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

const FoodDetails = () => {
    // const currentBrand = location?.state;
    const [cartQuantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)
    const location = useLocation();
    const foodId = location.state;
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(foodId, user.uid);
    const { isFetching, data: food } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await getFood(foodId)
            const item = await res.data;
            console.log(res, item);
            setTotal(Number(item?.price));
            return item;
        },
        initialData: {},
    });
    const addItem = async () => {
        const userId = food?.userId;
        const quantity = Number(food?.quantity) - Number(cartQuantity);
        const foodData = { userId, ...food, cartQuantity, total, quantity }
        console.log(foodData);
        // const foodData = { userId, data };
        try {
            await addToCart(foodData);
            navigate('/order')
        } catch {
            console.log(console.error());
        }
        // saveToCart(foodData)
    }

    const calculateTotal = (quantity) => {
        setQuantity(quantity)
        const result = (quantity * Number(food?.price)) || 0;
        setTotal(result)
    }
    if (isFetching) {
        return <div className="h-screen flex justify-center items-center">
        <Spinner color="amber" className="h-14 w-14 col-span-4 mx-auto" />
    </div>
        
    }
    return (
        <>
            <div className="bg-[url(https://i.ibb.co/3fNMsff/inner-pages-hero.webp)] relative w-full h-[500px] bg-cover primaryHeading text-white flex justify-start items-center text-start">
                <div className="md:max-w-screen-md lg:max-w-screen-2xl mx-auto flex flex-col gap-5 justify-start w-full after:h-[500px] after:content-[''] after:absolute after:w-full after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#09161d] after:to-[#09161d46]">
                    <img src="/public/images/breadcumb-left-vec.svg" alt="bg-icon" className="w-[200px] absolute left-0 bottom-0 z-20" />
                    <h2 className="primaryHeading text-6xl text-start z-10">
                        {food.name}
                    </h2>
                    <div className="flex gap-2 items-center z-20">
                        <a href="/">
                            <p className="text-lg text-white font-cormorant flex gap-2 items-center z-20">Home <AiOutlineDoubleRight /></p></a>
                        <span className="font-cormorant text-primary text-lg">{food.name}</span>
                    </div>
                    <img src="/images/breadcumb-left-vec.svg" alt="bg-icon" className="w-[200px] absolute right-0 bottom-0 z-20" />
                </div>
            </div>
            <div className="bg-[#F5F8FF] lg:py-20 py-10 px-4" >
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:max-w-screen-md lg:max-w-screen-xl p-5 md:py-10 md:p-10 lg:py-10 rounded-xl mx-auto bg-white">
                    <div className="bg-primaryLight flex justify-center items-center min-w-[50%] min-h-[550px]">
                        <img src={food.image} alt={food.name}
                            className="w-full md:w-1/2 lg:w-[300px]"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-3">
                        <p className="text font-medium"><span className="text-sm px-4 py-1 bg-gray-600 text-white rounded-sm">{food?.country}</span></p>
                        <h2 className="primaryHeading text-3xl">{food.name}</h2>
                        <p className="text-base leading-7 text-textColor">${food.description}</p>

                        {/* <ReactStarsRating size="18" starGap="2px" value={food?.rating} className="flex" /> */}
                        <p className="primaryHeading mt-3">${total}</p>
                        <div className="flex gap-3 mb-5">
                            <p className="text font-semibold font-cormorant text-textColor">Category:  <span className="text-sm font-light text-headingColor rounded-sm">{food?.category}</span></p>
                            <p className="text font-semibold font-cormorant text-textColor">In stock:  <span className="text-sm font-light text-headingColor rounded-sm">{food?.quantity}</span></p>
                        </div>
                        <div className="flex items-stretch justify-center gap-4 40px">
                            <input type="number" step={0}
                                max={food?.quantity} defaultValue={1}
                                min={1} inputMode="numeric" onChange={(e) => calculateTotal(e.target.value)}
                                className="text-base text-center py-1.5 font-medium ring-1 ring-blue-gray-100 rounded-sm" /><button className="primaryBtn py-1.5 w-full md:w-auto flex items-center gap-2" onClick={() => addItem()} >Order this food <MdAddShoppingCart /></button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
};

export default FoodDetails;