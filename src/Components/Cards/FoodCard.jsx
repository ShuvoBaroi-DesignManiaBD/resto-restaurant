import { BsArrowRight } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const FoodCard = ({ foodData, hasDelete, hasUpdate }, ...props) => {
    // const id = user.uid;
    console.log(foodData, props);
    const navigate = useNavigate();
    const stringWithHyphens = 'this-is-a-test-string';
const stringWithSpaces = stringWithHyphens.replace(/-/g, ' ');
console.log(stringWithSpaces); // Output: 'this is a test string'

    const deleteFood = () => {

    }

    return (
            <div className="flex flex-col items-stretch justify-between border-1 hover:shadow-xl rounded-lg w-full max-w-sm bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <a className="cursor-pointer" onClick={() => navigate(`${(foodData.name).toLowerCase().replace(/\s+/g, '-')}`, { state: foodData._id })}>
                    <img
                        className="w-full p-8 bg-gray-100 cover rounded-t-xl h-[200px] md:h-[300px]"
                        src={foodData?.image}
                        alt="food thumbnail"
                    />
                </a>
                <div className="p-5 pb-3 flex flex-col justify-start items-stretch gap-2">
                    <div className="flex justify-between">
                        <p className="text-sm font-medium px-2 py-1 bg-primaryLight dark:bg-gray-700 rounded-sm flex justify-start gap-2 items-center text-start"><MdFastfood className="text-primary" />{foodData?.category}</p>
                        <p className="text-sm font-medium px-2 rounded-sm flex justify-start gap-2 items-center text-start">Stock: {foodData?.quantity}</p>
                    </div>
                    <h3 className="text font-bold text-start dark:text-white" onClick={() => navigate(`/foods/${foodData._id}`, { state: foodData })}>
                        {foodData?.name}
                    </h3>
                    <div className="flex items-center justify-between gap-8 border-t pt-4 mt-4">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${foodData?.price}
                        </span>
                        <button className="text-primary font-bold px-3 text-base py-1 flex items-center gap-2" onClick={() => navigate(`/foods/${(foodData.name).toLowerCase().replace(/\s+/g, '-')}`, { state: foodData._id })}>View details <BsArrowRight size="20" /></button>
                        {/* <button className="text-primary font-bold px-3 text-base py-1 flex items-center gap-2" onClick={() => navigate(`${(foodData.name).toLowerCase()}`, { state: foodData._id })}>View details <BsArrowRight size="20" /></button> */}
                    </div>
                    <div className="flex gap-5 ">
                        {hasUpdate && <button className="primaryBtn bg-textColor border-textColor hover:bg-primary hover:border-primary px-0 text-sm py-2 w-full"
                            onClick={() => {
                                let name = foodData.name;
                                let url = name.replace(' ', '-')
                                navigate(`/update-food/${url}`, { state: foodData })
                            }}
                        >Update</button>}
                        {hasDelete && <button className="primaryBtn bg-red-900 border-red-900 hover:bg-red-700 hover:border-red-700 px-0 text-sm py-2 w-full"
                            onClick={deleteFood}
                        >Delete</button>}
                    </div>
                </div>
            <ToastContainer></ToastContainer>
            </div>
    );
};

export default FoodCard;