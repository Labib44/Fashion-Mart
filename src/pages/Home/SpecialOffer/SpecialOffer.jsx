import { Link } from "react-router-dom";
import newProduct from "../../../assets/home/specialOffer/spo1.jpg"
import bestSeling from "../../../assets/home/specialOffer/spo2.jpg"
import trendingSale from "../../../assets/home/specialOffer/spo3.jpg"


const SpecialOffer = () => {
    return (
        <div className="">
            <h1 className="text-center text-gray-600 text-3xl font-serif font-bold mt-10">SPECIAL OFFER</h1>
            <p className="text-center p-5 mb-5">Lorem ipsuet adipisicing elit, sed det adipisicing elit, sed sed det adipisicing elit.</p>
            <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-4'>

                <div className='h-[400px] sm:h-[250px] overflow-hidden'>
                    <img src={newProduct} alt="Branding" className='h-full w-full hover:scale-110 duration-700' />
                    <div className=' px-10'>
                        <div className='text-gray-600 absolute transform -translate-y-72 sm:-translate-y-44'>
                            <h1 className='text-4xl sm:text-xl font-serif font-bold'>NEW PRODUCT</h1>
                            <h1 className='text-xl font-serif font-bold mb-10 sm:mb-5'>Sell Up to 20 % Off</h1>
                            <Link className='text-white px-5 py-2 bg-gray-500 hover:bg-[#FC5F7D] duration-700 mt-10'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='h-[400px] sm:h-[250px] overflow-hidden'>
                    <img src={bestSeling} alt="Branding" className='h-full w-full hover:scale-110 duration-700' />
                    <div className=' px-10'>
                        <div className='text-gray-600 absolute transform -translate-y-72 sm:-translate-y-44'>
                            <h1 className='text-4xl sm:text-xl font-serif font-bold'>BEST SELING</h1>
                            <h1 className='text-xl font-serif font-bold mb-10 sm:mb-5'>Sell Up to 50 % Off</h1>
                            <Link className='text-white px-5 py-2 bg-gray-500 hover:bg-[#FC5F7D] duration-700 mt-10'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='h-[400px] sm:h-[250px] overflow-hidden'>
                    <img src={trendingSale} alt="Branding" className='h-full w-full hover:scale-110 duration-700' />
                    <div className=' px-10'>
                        <div className='text-gray-600 absolute transform -translate-y-72 sm:-translate-y-44'>
                            <h1 className='text-4xl sm:text-xl font-serif font-bold'>TRENDING SALE</h1>
                            <h1 className='text-xl font-serif font-bold mb-10 sm:mb-5'>Sell Up to 70 % Off</h1>
                            <Link className='text-white px-5 py-2 bg-gray-500 hover:bg-[#FC5F7D] duration-700 mt-10'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;