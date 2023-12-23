import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules

import { Autoplay, Navigation } from 'swiper/modules';

import img1 from '../../../assets/home/newArrivals/1.jpg'
import img2 from '../../../assets/home/newArrivals/12.jpg'
import img3 from '../../../assets/home/NewArrivals/3.jpg'
import img4 from '../../../assets/home/NewArrivals/4.jpg'
import img5 from '../../../assets/home/NewArrivals/5.jpg'
import img6 from '../../../assets/home/NewArrivals/6.jpg'

const NewProducts = () => {
    const newProductsData = [
        {
            id: 1,
            img: img1,
            title: "T-Shirt",
            price: 230.00,
            oldPrice: 260.00,
            review: 3.5,
        },
        {
            id: 2,
            img: img2,
            title: "Floral Dress",
            price: 130.00,
            oldPrice: 160.00,
            review: 3.5,
        },
        {
            id: 3,
            img: img3,
            title: "T-Shirt",
            price: 30.00,
            oldPrice: 60.00,
            review: 3.5,
        },
        {
            id: 4,
            img: img4,
            title: "Belted Dress",
            price: 199.00,
            oldPrice: 189.00,
            review: 3.5,
        },
        {
            id: 5,
            img: img5,
            title: "T-Shirt",
            price: 130.00,
            oldPrice: 170.00,
            review: 3.5,
        },
        {
            id: 6,
            img: img6,
            title: "T-Shirt",
            price: 259.00,
            oldPrice: 299.00,
            review: 3.5,
        },

    ]
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const swiperRef = useRef();

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className=" container mx-auto p-5 mt-20 md:mt-10 sm:mt-6">
        <h1 className="text-center text-gray-600 text-3xl font-bold">NEW ARRIVALS</h1>
        <p className="text-center p-5">Lorem ipsuet adipisicing elit, sed det adipisicing elit, sed sed det adipisicing elit.</p>

        <div className="flex mt-10">
            <div className=" border-[3px] border-secondary w-12 h-12 rounded-full cursor-pointer mr-2"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <AiOutlineArrowLeft className="text-3xl text-secondary m-[6px]"></AiOutlineArrowLeft>
            </div>
            <div className=" border-[3px] border-secondary w-12 h-12 rounded-full cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <AiOutlineArrowRight className="text-3xl text-secondary m-[6px]"></AiOutlineArrowRight>
            </div>
        </div>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}


            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}

            onAutoplayTimeLeft={onAutoplayTimeLeft}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }}

            className="mySwiper mt-10"
        >
            {
                newProductsData.map((ProductsData) => <div
                    key={ProductsData.id}
                >
                    <SwiperSlide>
                        <div className="h-[500px] w-96 rounded-md">
                            <img src={ProductsData.img} alt="" className=" rounded-md h-96 w-full" />
                            <div className="p-3">
                                <h1 className="text-xl font-semibold">{ProductsData.title}</h1>
                                <div className="flex justify-between">
                                    <p>${ProductsData.price} <span className="ml-5 line-through">${ProductsData.oldPrice}</span> </p>
                                    <p>{ProductsData.review}</p>
                                </div>


                            </div>
                        </div>
                    </SwiperSlide>
                </div>)
            }

            <div className="autoplay-progress hidden" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    </div>
    );
};

export default NewProducts;