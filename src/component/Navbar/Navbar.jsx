import { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../../assets/home/navbar/navbar1.png"
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [fix, setFix] = useState(false);


    function setFixed() {
        if (window.scrollY >= 1) {
            setFix(true)

        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)


    const menuItem = <>
        <li className="flex"><Link to="/" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>HOME</Link></li>
        <li className="flex"><Link to="/shop" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>SHOP</Link></li>
        <li className="flex"><Link to="" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>ABOUT US</Link></li>
        <li className="flex"><Link to="" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>BLOG</Link></li>

    </>
    return (
        <div className="p-3">
            <header className={`${fix ? " p-2 bg-white fixed z-50 w-full duration-700" : "duration-700"}`}>
                <div className= " flex justify-between h-16 mx-44 lg:mx-0 md:mx-0 sm:mx-0 ">
                    <Link to={"/"}  >
                        <div className="">
                            <img src={navbar} className="py-3 h-[80px]" alt="logo" />
                        </div>
                    </Link>

                    <div className="md:hidden sm:hidden">
                        <ul className="items-stretch flex gap-3 text-gray-800 cursor-pointer">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="items-center flex md:hidden sm:hidden">
                        <Link className="text-4xl text-red-500 mr-3"><Icon icon="mdi:cart-outline" /></Link>
                        <Link className="self-center px-4 py-2 bg-gray-500 text-white font-semibold rounded-sm">Login</Link>
                    </div>
                    <div className="hidden md:block sm:block">
                        <button className="p-4 hidden lg:block md:block sm:block"
                            onClick={() => setIsMobileMenu(!isMobileMenu)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {isMobileMenu && (
                            <ul className="absolute z-50 left-0 p-2 pb-5 shadow bg-base-100 w-full">
                                {menuItem}
                                <div className="mt-5">
                                    <Link className="self-center px-4 py-2 bg-gray-500 text-white font-semibold rounded-sm">Login</Link>
                                </div>

                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;