import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CenterAligned from "../Components/Layouts/CenterAligned";
import Banner1 from '../Components/Banners/HomeBanners/Banner1';

const Home = () => {
    return (
        <div className="">
            {/* Hero Area */}
            <div className="banner-vector absolute flex w-full justify-between">
                <img className="vector-top w-[170px] z-10 opacity-30 top-[600px] right-[500px] absolute" src="/public/images/shape1.svg" alt="hero-bg-icon-top" />
                <img className="vector-btm w-[170px] z-10 opacity-30 absolute top-[150px] left-[500px]" src="/public/images/shape2.svg" alt="hero-bg-icon-bottom" />
            </div>

            <div className="banner-section1 relative py-10 flex items-center">
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
                    className="flex relative mySwiper h-[calc(100vh-78px)] justify-center items-center"
                >
                    <SwiperSlide className=''><Banner1></Banner1></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;