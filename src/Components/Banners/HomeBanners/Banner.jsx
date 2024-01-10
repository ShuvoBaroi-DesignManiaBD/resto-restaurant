import { Link } from 'react-router-dom';
import SubTitle from '../../../Pages/Shared/SubTitle';
import './Banner.css'
const Banner = ({ subtitle, title, description, buttonText, leftImg, rightImg }) => {
    return (
        <div className='w-full h-full py-20 md:py-20 lg:py-40 flex flex-col md:flex-row justify-between items-end md:items-start lg:items-center relative'>


            <div className="banner-content z-50 w-[95vw] md:w-[60vw] lg:w-[40vw] pb-40 lg:pb-0 mx-auto flex flex-col justify-center items-center gap-3">
                <SubTitle subtitle={subtitle}></SubTitle>
                <h1 className='primaryHeading text-white text-center lg:text-[72px] lg:leading-[82px] mb-3 '>{title ? title : "Find Your Best Healthy & Tasty Food."}</h1>
                <p className='text-lg w-[90%] text-center text-white mb-3'>
                    {description ? description : "Sink your teeth into our succulent beef dishes, prepared with care to bring out the best flavors. From steaks to burgers, each bite is a taste of perfection. Button: Explore Beef Menu"}
                </p>
                <Link className="primaryBtn" to="/foods">
                    <i className="bi bi-arrow-up-right-circle" />
                    {buttonText ? buttonText : "Discover More"}
                </Link>
            </div>

            <div className='image-spinners py-10 absolute bottom-10 l w-full h-full flex justify-between items-end lg:items-center'>
                <div className="banner-left-img relative max-w-[40vw] md:max-w-[30vw] lg:max-w-[40vw]">
                    {/* <div className="swiper-button-prev"></div> */}
                    <img src="./images/union-left.svg" alt="union-left" className="relative w-full" />
                    <div className="food-img absolute -top-1 -right-1 md:top-1 md:right-1 md:bottom-0 flex items-start justify-end">
                        <img
                            className="max-w-[85%] md:max-w-[80%] lg:max-w-[100%] p-3 img-fluid animate-spin-slow rounded-full"
                            src={leftImg ? leftImg : "https://i.ibb.co/9hDnn9Q/banner-img-5.webp"}
                            alt="banner-img-5"
                        />
                    </div>
                </div>
                <div className="banner-right-img relative max-w-[40vw] md:max-w-[30vw] lg:max-w-[40vw]">
                {/* <div className="swiper-button-next"></div> */}
                    <img src="./images/union-right.svg" alt="union-right" className="relative w-full" />
                    <div className="food-img absolute -top-1 -left-1 botom-0 md:top-2 md:left-2 flex items-start justify-start">
                        <img
                            className="max-w-[85%] md:max-w-[80%] lg:max-w-[100%] p-3 animate-spin-slow rounded-full"
                            src={rightImg ? rightImg : "https://i.ibb.co/bmGZ0hv/banner-img-1.webp"}
                            alt="banner-img-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;