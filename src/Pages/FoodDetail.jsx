import { MdAddShoppingCart } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { NavLink, Navigate, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
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
    const [cartQuantity, setCartQuantity] = useState(1)
    const {name:path} = useParams();
    console.log(path);
    const location = useLocation();
    const foodId = location.state ?? location.hash;
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(location);
    const { isFetching, data: food } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await getFood(path)
            const item = await res.data;
            console.log(res, item);
            setTotal(Number(item?.price));
            return item;
        },
        initialData: {},
    });
    const [total, setTotal] = useState(Number(food?.price))
    const addItem = async () => {
        const userId = user?.uid;
        const { _id: foodId, ...data } = food;
        const quantity = Number(food?.quantity) - cartQuantity;
        const foodData = { ...data, foodId, userId, cartQuantity, total, quantity }
        console.log(foodData);
        // const foodData = { userId, data };
        try {
            user && await addToCart(foodData);
            user? navigate('/order') : navigate('/login', {state: location.pathname, hash: foodId})
        } catch {
            console.log(console.error());
        }
    }

    const calculateTotal = (quantity) => {
        setCartQuantity(Number(quantity))
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
                        <p className="primaryHeading mt-3">${total || food?.price}</p>
                        <div className="flex gap-3 mb-5">
                            <p className="text font-semibold font-cormorant text-textColor">Category:  <span className="text-sm font-light text-headingColor rounded-sm">{food?.category}</span></p>
                            <p className="text font-semibold font-cormorant text-textColor">In stock:  <span className="text-sm font-light text-headingColor rounded-sm">{food?.quantity}</span></p>
                            <p className="text font-semibold font-cormorant text-textColor">Seller:  <span className="text-sm capitalize font-light text-headingColor rounded-sm">{food?.ownerName}</span></p>
                        </div>
                        <div className="flex items-stretch justify-center gap-4 40px mb-3">
                            <input type="number" step={0}
                                max={food?.quantity} defaultValue={1}
                                min={1} inputMode="numeric" onChange={(e) => calculateTotal(e.target.value)}
                                className="text-base text-center py-1.5 font-medium ring-1 ring-blue-gray-100 rounded-sm" />
                            <button disabled={(food?.quantity < 1) ? true : false} className={`disabled:bg-[#c09542a3] disabled:border-[#c0964259] disabled:cursor-not-allowed
                            enabled:bg-primary text-white
                            primaryBtn py-1.5 w-full md:w-auto flex items-center gap-2`} onClick={() => addItem()} >Order this food <MdAddShoppingCart /></button>
                        </div>
                        {
                            food?.quantity < 1 && 
                            <div
                            className="bg-[#fef9c3] flex gap-2 items-center justify-center border border-[#fef08a] text-sm text-headingColor rounded-lg px-4 py-2"
                            role="alert"
                        >
                            <svg
                                className="flex-shrink-0 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            <p>
                            <span className="font-semibold">Out of stock! </span> Sorry, this food is not available.
                            </p>
                        </div>
                        }

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
};

export default FoodDetails;