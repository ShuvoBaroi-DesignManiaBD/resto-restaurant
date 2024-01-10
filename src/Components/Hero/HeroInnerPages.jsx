import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroInnerPages = ({ children, className, pageTitle }) => {
    return (

        <div className="bg-[url(https://i.ibb.co/3fNMsff/inner-pages-hero.webp)] relative w-full h-[500px] bg-cover primaryHeading text-white flex justify-start items-center text-start">
            <div className="md:max-w-screen-md lg:max-w-screen-2xl mx-auto flex flex-col gap-10 justify-start w-full after:h-[500px] after:content-[''] after:absolute after:w-full after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#09161d] after:to-[#09161d46]">
                <img src="/public/images/breadcumb-left-vec.svg" alt="bg-icon" className="w-[200px] absolute left-0 bottom-0 z-20" />
                <h2 className="primaryHeading text-6xl text-start z-10">
                    {pageTitle}
                </h2>
                <div className="flex gap-2 items-center z-20">
                    <a href="/">
                        <p className="text-lg text-white font-cormorant flex gap-2 items-center z-20">Home <AiOutlineDoubleRight /></p></a>
                    <span className="font-cormorant text-primary text-lg">{pageTitle}</span>
                </div>
                <img src="/images/breadcumb-left-vec.svg" alt="bg-icon" className="w-[200px] absolute right-0 bottom-0 z-20" />
            </div>
        </div>
    )
};

export default HeroInnerPages;