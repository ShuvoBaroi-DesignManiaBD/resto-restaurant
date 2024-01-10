import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CenterAligned from "../Components/Layouts/CenterAligned";
import Banner from '../Components/Banners/HomeBanners/Banner';
import Banner2 from '../Components/Banners/HomeBanners/Banner2';
import { Link } from 'react-router-dom';
import FoodCard from '../Components/Cards/foodCard';
import { useQuery } from '@tanstack/react-query';
import { getTopSellingFoods } from '../APIs/foods';
import { Spinner } from '@material-tailwind/react';
import SubTitle from './Shared/SubTitle';
import SiteMeta from '../Components/Shared/SiteMeta';

const Home = () => {
    const { isFetching, data } = useQuery({
        queryKey: ['topFoods'],
        queryFn: async () => {
            const res = await getTopSellingFoods()
            const foods = await res.data;
            console.log(res, foods);
            return foods;
        },
        initialData: { foods: [] },
    });

    console.log(data);
    return (
        <>
        <SiteMeta tagLine="A restaurant of delicious foods"></SiteMeta>
            {/* Hero Area */}
            <div className="">
                <div className="banner-vector hidden absolute lg:flex w-full justify-between">
                    <img className="vector-top w-[170px] z-10 opacity-30 top-[600px] right-[500px] absolute" src="/public/images/shape1.svg" alt="hero-bg-icon-top" />
                    <img className="vector-btm w-[170px] z-10 opacity-30 absolute top-[150px] left-[500px]" src="/public/images/shape2.svg" alt="hero-bg-icon-bottom" />
                </div>
                <div className="banner-section1 flex items-center">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        showsPagination={false}
                        navigation={true}
                        modules={[Navigation]}
                        className="flex relative mySwiper lg:h-[calc(100vh-75px)] justify-center items-end md:items-center lg:items-center"
                    >
                        <SwiperSlide className=''>
                            <Banner
                                description={`Indulge in a delightful culinary experience at Restho. Our menu features a diverse selection of healthy and flavorful dishes, prepared with care to tantalize your taste buds. Whether you're craving a hearty meal or a light bite, we have something to satisfy every palate.`}
                            ></Banner>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <Banner subtitle="Chicken Delights Await"
                                title="Chicken Galore"
                                description="From grilled to fried, our chicken dishes are a symphony of flavors. Whether you prefer it spicy or mild, there's a chicken dish here to satisfy every craving."
                                leftImg="https://i.ibb.co/LhVm9m9/banner-img-6.webp"
                                rightImg="https://i.ibb.co/m4qGX5M/banner-img-3.webp"
                                buttonText='View Chicken Selection'
                            ></Banner>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <Banner subtitle="Dive into Seafood Splendor"
                                title="Shrimp Sensation"
                                description="Experience the ocean's bounty with our delectable shrimp dishes. Fresh, flavorful, and cooked to perfection, our shrimp offerings are a seafood lover's dream.
                                Button: See Shrimp Menu"
                                leftImg="https://i.ibb.co/NysCqD3/banner-img-2.webp"
                                rightImg="https://i.ibb.co/9hDnn9Q/banner-img-5.webp"
                                buttonText="View foods"
                            ></Banner>
                        </SwiperSlide>
                        {/* <SwiperSlide className=''><Banner2></Banner2></SwiperSlide> */}
                        {/* <SwiperSlide className=''><Banner2></Banner2></SwiperSlide> */}
                    </Swiper>
                </div>
            </div>

            {/* Top selling foods area */}
            <section className="container mx-auto py-20 dark:bg-gray-900">
                <div className="px-4 mx-auto lg:px-6 ">
                    <div className="mx-auto max-w-screen-md text-center md:text-left">
                        <SubTitle subtitle="Top selling foods"></SubTitle>
                        <h2 className="primaryHeading md:text-5xl mb-5 text-center tracking-tight font-extrabold mt-3">
                            Our Popular foods
                        </h2>
                        <p className="font-light text-center text-textColor text dark:text-white">
                            Indulge in our selection of top-rated dishes that have won the hearts of our customers. From signature specialties to timeless classics, these popular foods are sure to satisfy your cravings and leave you coming back for more.
                        </p>
                    </div>
                    <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
                        {isFetching ? (
                            <Spinner color="amber" className="h-12 w-12 my-32 col-span-4 mx-auto" />
                        ) : (
                            data?.map((food) => (
                                <FoodCard
                                    key={food._id}

                                    foodData={food}
                                ></FoodCard>
                            ))
                        )
                        }
                    </div>
                    <div className="flex justify-center gap-5 pt-20">
                        <Link to="/foods" className="primaryBtn">
                            View all foods
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our menu area */}
            <section className="container mx-auto pb-20 dark:bg-gray-900" >
                <div className="px-4 mx-auto lg:px-6 ">
                    <div className="mx-auto max-w-screen-md text-center space-y-3 md:text-left">
                        <SubTitle subtitle="Menu List"></SubTitle>
                        <h2 className="primaryHeading text-center md:text-5xl tracking-tight font-extrabold">
                            Our Menu List
                        </h2>
                        <p className="font-light text-center text-textColor text dark:text-white">
                            We have variety of food collections. Take a look to our well-organazed food menu and choose your favorite one!
                        </p>
                    </div>
                    <div className="grid gap-8 mt-10 grid-cols-1 md:grid-cols-2">
                        <img src="https://i.ibb.co/B60T1wc/menu01.png" alt="Menu01" className='h-full' />
                        <img src="https://i.ibb.co/6ZY8VSf/menu02.png" alt="Menu02" className='h-full' />
                    </div>
                </div>
            </section>

            {/* Best offer */}
            <section className="container mx-auto pb-20 dark:bg-gray-900 px-4 lg:px-0">
                <div className="mx-auto text-center md:text-left">
                    <SubTitle subtitle="Best Offer"></SubTitle>
                    <h2 className="primaryHeading mb-6 text-center lg:text-5xl tracking-tight font-extrabold mt-3">
                        Choose Your Best Offer
                    </h2>
                </div>
                <div className="grid gap-8 mt-10 grid-cols-1 lg:grid-cols-2">
                    <div className="best-offer-wrap px-10 py-5 border border-[#eee] rounded-md clearfix flex flex-col-reverse md:flex-row items-center gap-8">
                        <div className="best-offer-content flex flex-col gap-4  justify-center items-start md:w-1/2 h-full">
                            <h3 className='secondaryHeading text-2xl'>Buy One Get One Free</h3>
                            <p className='text text-base'>Enjoy our special offer where you can get a free serving of Prawn with Noodles or Special Drinks when you purchase one. </p>
                            <Link to='/foods' className="primaryBtn py-2">Limited Offer</Link>
                            <ol className="features space-y-2 list-decimal list-inside text-sm">
                                <li>Prawn with Noodls.</li>
                                <li>Special Drinks.</li>
                            </ol>
                        </div>
                        <div className="best-offer-img w-1/2">
                            <img
                                className="img-fluid"
                                src="https://i.ibb.co/BL18F4P/offer-for-prawn.png"
                                alt="best-offer-img1"
                            />
                        </div>
                    </div>
                    <div className="best-offer-wrap px-10 py-5 border border-[#eee] rounded-md clearfix flex flex-col-reverse md:flex-row items-center gap-8">
                        <div className="best-offer-content flex flex-col gap-4
                          justify-center items-start md:w-1/2">
                            <h3 className='secondaryHeading text-2xl'>Buy One Get One Free</h3>
                            <p className='text text-base'>Whether you're craving crispy chicken or a refreshing beverage, this offer allows you to double the delight without doubling the price. </p>
                            <Link to='/foods' className="primaryBtn py-2">Limited Offer</Link>
                            <ol className="features space-y-2 list-decimal list-inside text-sm">
                                <li>Fried Chicken
                                </li>
                                <li>Watermelon Juice</li>
                            </ol>
                        </div>
                        <div className="best-offer-img w-1/2">
                            <img
                                className="img-fluid"
                                src="https://i.ibb.co/jW1mrT5/friend-chicken-offer.png"
                                alt="best-offer-img1"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;