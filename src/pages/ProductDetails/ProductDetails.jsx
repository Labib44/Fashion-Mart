/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { name, price, color, imageUrl, status, description } = productData.data;


    const [amount, setAmount] = useState(1);
    const [images, setImages] = useState({
        img1: imageUrl,
        img2: imageUrl,
        img3: imageUrl,
        img4: imageUrl,
    })
    const [activeImg, setActiveImage] = useState(images.img1)


    return (
        <div className="p-5 container mx-auto">
            <div className='grid grid-cols-2 sm:grid-cols-1 justify-between gap-16 md:gap-5 lg:gap-5 items-center my-20'>
                <div className='flex flex-col gap-6 '>
                    <div className="">
                        <img src={activeImg} alt="" className='w-full h-full aspect-square rounded-xl' />
                    </div>
                    <div className='flex flex-row justify-between h-24'>
                        <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
                        <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
                        <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
                        <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />
                    </div>
                </div>
                {/* ABOUT */}
                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <div>
                        <h1 className='text-3xl text-gray-600 font-semibold'>{name}</h1>
                    </div>
                    <p className='text-gray-700'>{description}</p>

                    <hr />
                    <h1 className='text-2xl font-semibold text-gray-600'>Price: $ {price}</h1>
                    {/* <h1 className='text-2xl font-semibold text-gray-600'>Color: {color}</h1> */}
                    <h1 className='text-2xl font-semibold text-gray-600'>Availability: {status}</h1>
                    <hr />
                    {/* color */}
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className=" text-2xl text-gray-600">Choose color</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-800" checked />
                            <input type="radio" name="radio-10" className="radio checked:bg-black" checked />
                            <input type="radio" name="radio-10" className="radio checked:bg-sky-500" checked />
                            <input type="radio" name="radio-10" className="radio checked:bg-yellow-500 " checked />
                            <input type="radio" name="radio-10" className="radio checked:bg-pink-500" checked />
                        </label>

                        <div className="join my-5">
                            <input className="join-item btn" type="radio" name="options" aria-label="M" />
                            <input className="join-item btn" type="radio" name="options" aria-label="L" />
                            <input className="join-item btn" type="radio" name="options" aria-label="XL" />
                        </div>
                    </div>


                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center'>
                            <h1 className="text-2xl font-bold text-gray-600 mr-2" >Quantity</h1>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl font-extrabold' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl font-extrabold' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <Link to={'/addCart'} className='text-white px-5 py-2 rounded-xl bg-gray-500 hover:bg-[#FC5F7D] duration-700'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;