import { AiOutlineDoubleRight } from "react-icons/ai";
import HeroInnerPages from "../../Components/Hero/HeroInnerPages";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner";
import { getAddedFoods } from "../../APIs/foods";
import TableHead from "../../Components/Table/AddedFoods/TableHead";
import TableBody from "../../Components/Table/AddedFoods/TableBody";
import SiteMeta from "../../Components/Shared/SiteMeta";



const MyAddedFoods = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(0);
  // const [open, setOpen] = useState(null);
  const labels = ['Thumbnail', 'Name', 'Category', 'Country', 'Quantity', 'Price($)', 'Actions']

  const { isFetching, refetch, data: { result: foods, foodsCount } } = useQuery({
    queryKey: ['addedFoods', page],
    queryFn: async () => {
      const res = await getAddedFoods(user?.email, page)
      const data = await res.data;
      console.log(data);
      return data;
    },
    initialData: { foods: [], foodsCount: 0 }
  });


  const convertSeconds = (seconds) => {
    const orderDate = new Date(seconds);
    const formattedDate = `${orderDate.getDate()}/${orderDate.getMonth() + 1}/${orderDate.getFullYear()}`;
    return formattedDate
  }

  console.log(foods);
  const totalPages = Math.ceil(foodsCount / 2);
  const pages = [... new Array(totalPages).fill(0)];
  console.log(page, pages, pages.length);
  return (
    <>
    <SiteMeta tagLine="My added foods"></SiteMeta>
      <HeroInnerPages pageTitle={"My Added Foods"}></HeroInnerPages>
      <div className="container sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col justify-between">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <TableHead labels={labels}></TableHead>
                  <TableBody foodsData={foods} convertSeconds={convertSeconds} foodsCount={foodsCount} refetch={refetch} isFetching={isFetching} varient="gradient" ></TableBody>
                </table>
                {/* End Table */}
                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {isFetching ? <div className='w-[80vw] mx-auto flex justify-center items-center'><LoadingSpinner></LoadingSpinner></div> :
                          foodsCount}
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={() => page > 0 ? setPage(page - 1) : setPage(0)}
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4"
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
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>
                      {pages?.map((item, index) => {
                        return <button key={index}
                          type="button"
                          className={`py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 text-text shadow-sm hover:bg-gray-50 ${page == index ? 'bg-primary text-white hover:bg-primary' : ''}`}
                          onClick={() => setPage(index)}
                        >
                          {index + 1}
                        </button>
                      })}
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={() => page + 1 < pages.length ? setPage(page + 1) : setPage(page)}
                      >
                        Next
                        <svg
                          className="flex-shrink-0 w-4 h-4"
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
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
    </>
  );
};

export default MyAddedFoods;