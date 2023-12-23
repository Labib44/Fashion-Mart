
import { useState } from "react";
import img1 from "../../assets/products/productDetails/7.jpg"
import img2 from "../../assets/products/productDetails/8.jpg"
import img3 from "../../assets/products/productDetails/9.jpg"
import img4 from "../../assets/products/productDetails/10.jpg"
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const [amount, setAmount] = useState(1);
    const [images, setImages] = useState({
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
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
                        <span className='text-3xl text-gray-600 font-semibold'>Womens Fashion</span>
                        <h1 className='text-3xl font-bold'>T-Shirt</h1>
                    </div>
                    <p className='text-gray-700'>
                        Con ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                    </p>
                    <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                   
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <Link className='text-white px-5 py-2 rounded-xl bg-gray-500 hover:bg-[#FC5F7D] duration-700'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;