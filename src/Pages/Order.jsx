import { CgClose } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "./Login";
import CenterAligned from "../Components/Layouts/CenterAligned";
import { useState } from "react";
import { getCartItems } from "../APIs/cart";
import { useQuery } from "@tanstack/react-query";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";

const Order = () => {
    const food = getCartItems();
    // let { state: food } = useLocation();
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState(true);
    const [open, setOpen] = useState(0);
    const [selectedValue, setSelectedValue] = useState('bankTransfer');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const { user } = useAuth();
    const { isFetching, refetch, data } = useQuery({
        queryKey: ['cartItems', cart],
        queryFn: async () => {
            console.log(user.uid);
            const res = await getCartItems(user.uid)
            const items = await res.data;
            console.log(res, items);
            return items;
        },
        initialData: [],
    });

    const handleOpen = (value) => setOpen(open == value ? 0 : value);

    const navigate = useNavigate();
    console.log(data);

    const removeFood = () => {
        setCart(!cart);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userId = user.uid;
        const name = user.displayName;
        const email = user.email;
        const phone = form.phone.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const payment = selectedValue;
        const foods = [];
        const total = data.reduce((acc, item) => acc + item.total, 0);
        data.map(item => foods.push(item));
        const orderData = {
            userId,
            name,
            email,
            phone,
            address,
            city,
            country,
            payment,
            total,
            foods
        }
        console.log(form, orderData);
    }

    return (
        <section className="bg-[#F5F8FF] lg:py-20 py-10 px-4">
            <CenterAligned className="max-w-screen-2xl flex flex-col justify-center items-center">
                <h2 className="primaryHeading text-center mb-10">
                    Secure order
                </h2>
                <form className="w-[100%] grid grid-cols-6 gap-5"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col w-full lg:col-span-4 gap-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="bg-white p-6 rounded-lg leading-5">
                            <h4 className="uppercase mb-4 text-base font-semibold">1. Review your order</h4>
                            {data.length !== 0 ? data.map(item => {
                                return (
                                    <div key={item._id} className="grid grid-cols-12 gap-3 border-b py-3">
                                        <img src={item?.image} alt="food image" className="col-span-1 w-36 rounded-md" />
                                        <div className="col-span-9">
                                            <h5 className="text-sm font-medium">{item?.name}</h5>
                                            <p className="text-[12px]">Category: <span>{item?.category}</span></p>
                                            <p className="text-[12px]">Items left: <span>{item?.quantity}</span></p>
                                            <p className="text-[12px]">Qty: {item?.cartQuantity}</p>
                                        </div>
                                        <div className="h-full col-span-2 flex flex-col justify-between items-end">
                                            <button onClick={() => removeFood()} className="cursor-pointer"><CgClose /></button>
                                            <p className="text-sm font-medium">${item?.total} USD</p>
                                        </div>
                                    </div>
                                )

                            })
                                :
                                <p className="border-b py-5">Please choose a food!</p>
                            }
                            <div className="flex w-full justify-between">
                                <h4 className="pt-3 flex justify-between text-justify">Subtotal:</h4>
                                <h4 className="pt-3 flex justify-between text-justify font-semibold text-primary">${
                                    data.reduce((acc, item) => acc + item.total, 0)
                                } USD</h4>
                            </div>

                        </div>
                        <div className="bg-white p-6 rounded-lg">
                            <h4 className="uppercase font-semibold mb-4">2. Delivery addres</h4>
                            <div className="grid gap-4 sm:grid-cols-6 sm:gap-6">


                                {/* Customer name */}
                                <div className="col-span-3 md:col-span-2">
                                    <label
                                        htmlFor="foodName"
                                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="ownerName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type your name"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        required
                                    />

                                </div>

                                {/* Customer email */}
                                <div className="col-span-6 md:col-span-2">
                                    <label
                                        htmlFor="foodName"
                                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="CustomerEmail"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type your email"
                                        defaultValue={user?.email}
                                        readOnly
                                        required
                                    />

                                </div>

                                {/* Customer phone */}
                                <div className="col-span-6 md:col-span-2">
                                    <label
                                        htmlFor="foodName"
                                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type your phone number"
                                        minLength={10}
                                        maxLength={11}
                                        defaultValue={user?.email}
                                        required
                                    />

                                </div>

                                {/* Customer Address */}
                                <div className="col-span-6 md:col-span-2">
                                    <label
                                        htmlFor="foodName"
                                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                                    >
                                        Delivery address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type your House no./street address etc."
                                        required
                                    />

                                </div>
                                {/* Customer city */}
                                <div className="col-span-6 md:col-span-2">
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="City name"
                                        required
                                    />
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm text-gray-900 dark:text-white"
                                    >
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your country"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg flex flex-col gap-3">
                            <h4 className="uppercase pb-3 font-semibold">3. Payment method</h4>
                            <fieldset name="payment">
                                <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4 w-full" onClick={() => handleOpen(1)}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(1)}
                                        className={`flex justify-start border-b-0 transition-colors py-4 w-full ${open === 1 ? "text-blue-500 hover:!text-primary" : ""
                                            }`}
                                    >
                                        <input
                                            id="bankTransfer"
                                            type="radio"
                                            value="bankTransfer"
                                            name="list-radio"
                                            className="w-4 h-4 accent-primary text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            onClick={() => handleOpen(1)}
                                            checked={selectedValue === 'bankTransfer'}
                                            onChange={handleRadioChange}
                                        />
                                        <label
                                            htmlFor="bankTransfer"
                                            className="text-start ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            onClick={() => handleOpen(1)}
                                        >
                                            Direct bank transfer{" "}
                                        </label>
                                    </AccordionHeader>
                                    <AccordionBody className="pt-0 text-base font-normal">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </AccordionBody>
                                </Accordion>
                                <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4 w-full" onClick={() => handleOpen(2)}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(2)}
                                        className={`flex justify-start border-b-0 transition-colors py-4 w-full ${open === 2 ? "text-blue-500 hover:!text-primary" : ""
                                            }`}
                                    >
                                        <input
                                            id="CashDelivery"
                                            type="radio"
                                            defaultValue=""
                                            value="CashPayment"
                                            name="list-radio"
                                            className="w-4 h-4 accent-primary text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            onClick={() => handleOpen(2)}
                                            checked={selectedValue === 'CashPayment'}
                                            onChange={handleRadioChange}
                                        />
                                        <label
                                            htmlFor="CashDelivery"
                                            className="text-start ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            onClick={() => handleOpen(2)}
                                        >
                                            Cash on delivery{" "}
                                        </label>
                                    </AccordionHeader>
                                    <AccordionBody className="pt-0 text-base font-normal">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </AccordionBody>
                                </Accordion>
                            </fieldset>

                            <button type="submit" className="primaryBtn">Order now</button>

                        </div>
                    </div>
                </form>
            </CenterAligned>
        </section>
    );
}


export default Order;