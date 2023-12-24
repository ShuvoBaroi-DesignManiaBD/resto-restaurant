import { MdAddShoppingCart } from "react-icons/md"; 
import { BsCartPlus } from "react-icons/bs"; 
import { AiOutlineDoubleRight } from "react-icons/ai";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating'
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { useAuth } from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
    // const currentBrand = location?.state;
    const location = useLocation();
    const food = location.state;
    const { user } = useAuth();
    console.log(food);

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
                        <p className="text font-bold"><span className="text-sm px-4 py-1 bg-primary text-white rounded-sm">{food?.country}</span></p>
                        <h2 className="primaryHeading text-3xl">{food.name}</h2>
                        <p className="text-base leading-7 text-textColor">${food.description}</p>

                        {/* <ReactStarsRating size="18" starGap="2px" value={food?.rating} className="flex" /> */}
                        <p className="primaryHeading mt-3">${food.price}</p>
                        <p className="textLg font-cormorant text-textColor">Category:  <span className="text-sm font-light text-headingColor rounded-sm">{food?.category}</span></p>
                        <p className="text mt-3">{food.short_description}</p>
                        <NavLink className="primaryBtn py-1.5 w-full md:w-auto flex items-center gap-2" to="/order">Order this food <MdAddShoppingCart /></NavLink>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
};

export default ProductDetails;