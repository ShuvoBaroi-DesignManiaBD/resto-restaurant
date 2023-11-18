import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css'
const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center bg-cover bg-center footerBg text-white">
            <div className="footer-top container py-20">
                <div className="">
                    <div className="container grid grid-cols-3 justify-content-between align-items-center gy-5">
                        <div className="">
                            <div className="footer-widget one space-y-4">
                                <div className="widget-title">
                                    <h3 className="secondaryHeading">Our Facilities</h3>
                                </div>
                                <div className="menu-container flex gap-20">
                                    <ul className="text font-normal text-offWhite space-y-4">
                                        <li>
                                            <a href="/menu1">Indian Menu</a>
                                        </li>
                                        <li>
                                            <a href="/menu1">Menu Item</a>
                                        </li>
                                        <li>
                                            <a href="/reservation">Private Event</a>
                                        </li>
                                        <li>
                                            <a href="/menu1">Italian Menu</a>
                                        </li>
                                        <li>
                                            <a href="/category">Best Offer</a>
                                        </li>
                                    </ul>
                                    <ul className="text text-offWhite space-y-4">
                                        <li>
                                            <a href="/category">Popular Item</a>
                                        </li>
                                        <li>
                                            <a href="/menu1">Regular Menu</a>
                                        </li>
                                        <li>
                                            <a href="/menu1">New Food</a>
                                        </li>
                                        <li>
                                            <a href="/category">Special Offer</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[330px] h-[320px] p-8 border rounded-full border-solid border-[#ffffff26]">
                            <div className="footer-widgetfooter-widget social-area">
                                <div className="footer-logo flex flex-col gap-4 justify-center items-center text-center">
                                    <img src="/images/header1-logo.svg" alt="" />
                                    <p className='textLg tracking-[4px] text-offWhite'>Established . 2022</p>
                                    <span className='relative inline-block'>
                                        <img src="/images/footer-shape.svg" alt="" />
                                    </span>
                                </div>
                                <div className="footer-social">
                                    <ul className="flex pt-8 justify-center gap-4 text-white ">
                                        <li className='text-offWhite border-solid border-2 rounded-full border-borderLight p-2'>
                                            <a className='' href="https://www.facebook.com/">
                                            <FaFacebookF className=''/>
                                            </a>
                                        </li>
                                        <li className='text-offWhite border-solid border-2 rounded-full border-borderLight p-2'>
                                            <a href="https://www.instagram.com/">
                                                <FaInstagram></FaInstagram>
                                            </a>
                                        </li>
                                        <li className='text-offWhite border-solid border-2 rounded-full border-borderLight p-2'>
                                            <a href="https://www.pinterest.com/">
                                                <FaLinkedin></FaLinkedin>
                                            </a>
                                        </li>
                                        <li className='text-offWhite border-solid border-2 rounded-full border-borderLight p-2'>
                                            <a href="https://twitter.com/">
                                                <FaTwitter></FaTwitter>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="footer-widget space-y-4">
                                <div className="widget-title">
                                    <h3 className='secondaryHeading'>Address Info</h3>
                                </div>
                                <div className="contact-info text-offWhite space-y-4">
                                    <div className="single-contact">
                                        <span className="text-primary font-semibold">Phone: </span>
                                        <span className="content">
                                            <a href="tel:+8801776766767">+880-1776-766-767</a>
                                        </span>
                                    </div>
                                    <div className="single-contact">
                                        <span className="text-primary font-semibold">Email: </span>
                                        <span className="content">
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </span>
                                    </div>
                                    <div className="single-contact">
                                        <span className="text-primary font-semibold">Fax ID: </span>
                                        <span className="content">
                                            <a href="fax:+9975667786">+99-75667-786</a>
                                        </span>
                                    </div>
                                    <div className="single-contact">
                                        <span className="text-primary font-semibold">Location: </span>
                                        <span className="content">
                                            <a href="https://goo.gl/maps/2Q4gzMK8mNc1uYnL7">
                                                Mirpur DOHS,House-167/170,
                                                <br />
                                                Road-02 Avenue-01.
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-btm w-full">
                <div className="container mx-auto">
                    <div className="flex justify-between mx-auto border-t-[1px] border-[#ffffff26] py-4">
                        <div className="">
                            <div className="copyright-area text-[12px]">
                                <p className='text-center'>
                                    @Copyright by{/* */} <a href="/#">Egenslab</a>-2023, All Right
                                    Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="privacy-policy">
                                <p className='text-[12px] text-center'>
                                    <a href="/#">Privacy &amp; Policy</a> {/* */}|{" "}
                                    <a href="#">Terms and Conditions</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;