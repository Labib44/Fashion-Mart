/* eslint-disable react/prop-types */
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";


const ShopBanner = () => {



    return (
        <div className="w-full flex sm:flex-wrap md:items-center justify-between">
            {/* Left side start */}

            <div className="flex items-center gap-4">
                
                <BsGridFill className="text-3xl border-[1px] border-gray-300 text-[#737373] cursor-pointer"/>
                
                <ImList className="text-2xl text-[#737373] cursor-pointer"/>
            </div>
            {/* left side end */}


           {/* right side start */}
            <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-2 text-base text-[#767676] relative">
                    <label className="block">Sort by:</label>
                    <select
                      
                        id="countries"
                        className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
                    >
                        <option value="Best Sellers">Best Sellers</option>
                        <option value="New Arrival">New Arrival</option>
                        <option value="Featured">Featured</option>
                        <option value="Final Offer">Final Offer</option>
                    </select>
                    <span className="absolute text-sm right-2 md:right-4 top-2.5">
                        <GoTriangleDown />
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[#767676] relative">
                    <label className="block">Show:</label>
                    <select
                       
                        id="countries"
                        className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
                    >
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                    </select>
                    <span className="absolute text-sm right-3 top-2.5">
                        <GoTriangleDown />
                    </span>
                </div>
            </div>
            {/* right side end */}
        </div>
    );
};

export default ShopBanner;