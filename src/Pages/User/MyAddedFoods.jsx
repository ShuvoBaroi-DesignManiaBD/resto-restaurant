import { AiOutlineDoubleRight } from "react-icons/ai";
import HeroInnerPages from "../../Components/Hero/HeroInnerPages";
import { Link } from "react-router-dom";

const MyAddedFoods = () => {
  const labels = ['Thumbnail', 'Name', 'Category', 'Country', 'Added time', 'Price', 'Quantity', 'Total ($)', 'Actions']
    return (
      <h2>this is test</h2>

// import React, { useState } from 'react';
// import HeroInnerPages from '../Components/Hero/HeroInnerPages';
// import { Link } from 'react-router-dom';
// import TableHead from '../Components/Table/OrdersTable/TableHead';
// import TableBody from '../Components/Table/OrdersTable/TableBody';
// import { getOrders } from '../APIs/orders';
// import { useQuery } from '@tanstack/react-query';
// import { AiOutlineDoubleRight } from 'react-icons/ai';
// import { useAuth } from '../Hooks/useAuth';
// import LoadingSpinner from '../Components/Shared/LoadingSpinner';

// const MyOrder = () => {
//     const { user } = useAuth();
//     const [page, setPage] = useState(0);
//     const labels = ['Thumbnail', 'Name', 'Category', 'Country', 'Added time', 'Price', 'Quantity', 'Total ($)', 'Actions']

//     const { isFetching, refetch, data: { result: orders, countOrders } } = useQuery({
//         queryKey: ['orders', page],
//         queryFn: async () => {
//             const res = await getOrders(user?.uid, page)
//             const data = await res.data;
//             console.log(data);
//             return data;
//         },
//         initialData: { orders: [], countOrders: 0 }
//     });

//     const convertSeconds = (seconds) => {
//         const orderDate = new Date(seconds);
//         const formattedDate = `${orderDate.getDate()}/${orderDate.getMonth() + 1}/${orderDate.getFullYear()}`;
//         return formattedDate
//     }
//     // const foods = [];
//     // orders?.map(order => foods.push(...order.foods))
//     console.log(orders);
//     const totalPages = Math.ceil(countOrders / 5);
//     const pages = [... new Array(totalPages).fill(0)];
//     console.log(page, pages, pages.length);
//     return (
//         <>
//             <div className="bg-[url(https://i.ibb.co/3fNMsff/inner-pages-hero.webp)] relative w-full h-[500px] bg-cover primaryHeading text-white flex justify-start items-center text-start">
//                 <div className="md:max-w-screen-md lg:max-w-screen-2xl mx-auto flex flex-col gap-10 justify-start w-full after:h-[500px] after:content-[''] after:absolute after:w-full after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#09161d] after:to-[#09161d46]">
//                     <img src="/public/images/breadcumb-left-vec.svg" alt="bg-icon" className="w-[200px] absolute left-0 bottom-0 z-20" />
//                     <h2 className="primaryHeading text-6xl text-start z-10">
//                         My ordered foods
//                     </h2>
//                     <div className="flex gap-2 items-center z-20">
//                         <a href="/">
//                             <p className="text-lg text-white font-cormorant flex gap-2 items-center z-20">Home <AiOutlineDoubleRight /></p></a>
//                         <span className="font-cormorant text-primary text-lg">My ordered foods</span>
//                     </div>
//                     <img src="/images/breadcumb-left-vec.svg" alt="bg-icon" className="w-[200px] absolute right-0 bottom-0 z-20" />
//                 </div>
//             </div>
//             <HeroInnerPages className='bg-white pb-0'>
//                 All foods
//             </HeroInnerPages>
//             <div className="container sm:px-6 lg:px-8 lg:py-14 mx-auto">
//                 {/* Card */}
//                 <div className="flex flex-col justify-between">
//                     <div className="-m-1.5 overflow-x-auto">
//                         <div className="p-1.5 min-w-full inline-block align-middle">
//                             <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
//                                 {/* Header */}
//                                 {/* <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
//                                     <div>
//                                         <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                                             Orders
//                                         </h2>
//                                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                                             Add orders, edit and more.
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <div className="inline-flex gap-x-2">
//                                             <Link
//                                                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                                 to='add-user'
//                                             >
//                                                 <svg
//                                                     className="flex-shrink-0 w-3 h-3"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     width={16}
//                                                     height={16}
//                                                     viewBox="0 0 16 16"
//                                                     fill="none"
//                                                 >
//                                                     <path
//                                                         d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
//                                                         stroke="currentColor"
//                                                         strokeWidth={2}
//                                                         strokeLinecap="round"
//                                                     />
//                                                 </svg>
//                                                 Add order
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div> */}
//                                 {/* End Header */}
//                                 {/* Table */}
//                                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                                     <TableHead labels={labels}></TableHead>
//                                     <TableBody orders={orders} convertSeconds={convertSeconds} countOrders={countOrders} refetch={refetch} isFetching={isFetching}></TableBody>
//                                 </table>
//                                 {/* End Table */}
//                                 {/* Footer */}
//                                 <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
//                                     <div>
//                                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                                             <span className="font-semibold text-gray-800 dark:text-gray-200">
//                                                 {isFetching? <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div>:
//                                                 countOrders}
//                                             </span>{" "}
//                                             results
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <div className="inline-flex gap-x-2">
//                                             <button
//                                                 type="button"
//                                                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                                 onClick={() => page > 0 ? setPage(page - 1) : setPage(0)}
//                                             >
//                                                 <svg
//                                                     className="flex-shrink-0 w-4 h-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     width={24}
//                                                     height={24}
//                                                     viewBox="0 0 24 24"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     strokeWidth={2}
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 >
//                                                     <path d="m15 18-6-6 6-6" />
//                                                 </svg>
//                                                 Prev
//                                             </button>
//                                             {pages?.map((item, index) => {
//                                                 return <button key={index}
//                                                     type="button"
//                                                     className={`py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 text-text shadow-sm hover:bg-gray-50 ${page == index ? 'bg-primary text-white hover:bg-primary' : ''}`}
//                                                     onClick={() => setPage(index)}
//                                                 >
//                                                     {index + 1}
//                                                 </button>
//                                             })}
//                                             <button
//                                                 type="button"
//                                                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                                 onClick={() => page + 1 < pages.length ? setPage(page + 1) : setPage(page)}
//                                             >
//                                                 Next
//                                                 <svg
//                                                     className="flex-shrink-0 w-4 h-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     width={24}
//                                                     height={24}
//                                                     viewBox="0 0 24 24"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     strokeWidth={2}
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 >
//                                                     <path d="m9 18 6-6-6-6" />
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* End Footer */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* End Card */}
//             </div>
//         </>
//     );
// };

// export default MyOrder;

    );
};

export default MyAddedFoods;