import './Banner.css'
const Banner2 = () => {
    return (
        <div className='w-full h-full flex justify-between items-center'>
            <div className="banner-left-img relative z-30">
                <img src="./images/union-left.svg" alt="union-left"className=""/>
                <div className="swiper-button-prev"></div>
                <div className="food-img">
                    <img
                        className="img-fluid absolute top-4 right-4 animate-spin-slow"
                        src="https://i.ibb.co/9hDnn9Q/banner-img-5.webp"
                        alt="banner-img-5"
                    />
                </div>
            </div>

            <div className="banner-content flex flex-col justify-center items-center gap-3">
                <span className='textLg flex gap-3 text-primary text-center'>
                    <img
                        className="left-vec"
                        src="/public/images/sub-title-vec.svg"
                        alt="sub-title-vec"
                    />
                    Welcome To Restho
                    <img
                        className="right-vec"
                        src="/public/images/sub-title-vec.svg"
                        alt="sub-title-vec"
                    />
                </span>
                <h1 className='primaryHeading text-white text-center text-[72px] max-w-[40vw] leading-[82px] mb-3 '>Find Your Best Healthy &amp; Tasty Food.</h1>
                <p className='text-[20px] text-center text-white mb-3'>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page.
                </p>
                <a className="primaryBtn" href="/about">
                    <i className="bi bi-arrow-up-right-circle" />
                    Discover More
                </a>
            </div>

            <div className="banner-right-img relative z-30">
                <img src="./images/union-right.svg" alt="union-right" />
                <div className="food-img">
                    <img
                        className="img-fluid absolute top-4 left-4 animate-spin-slow"
                        src="https://i.ibb.co/LhVm9m9/banner-img-6.webp"
                        alt="banner-img-5"
                    />
                </div>
            </div>

        </div>
    );
};

export default Banner2;