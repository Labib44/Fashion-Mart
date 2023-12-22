import Stars from "../../../../component/Stars/Stars";
import img1 from "../../../../assets/home/productsMiniature/topRates/1.jpg"
import img2 from "../../../../assets/home/productsMiniature/topRates/2.jpg"
import img3 from "../../../../assets/home/productsMiniature/topRates/3.jpg"
import img4 from "../../../../assets/home/productsMiniature/topRates/4.jpg"
import img5 from "../../../../assets/home/productsMiniature/topRates/5.jpg"
import img6 from "../../../../assets/home/productsMiniature/topRates/6.jpg"

const TopRates = () => {
    const topRates = [
        {
            id: 1,
            title: "Half T-Shirt",
            img: img1,
            reviews: 2.3,
            price: 145.00,
        },
        {
            id: 2,
            title: "Girls T-Shirt",
            img: img2,
            reviews: 3,
            price: 45.00,
        },
        {
            id: 3,
            title: "Family Dress",
            img: img3,
            reviews: 5,
            price: 335.00,
        },
        {
            id: 4,
            title: "Baby full-Set",
            img: img4,
            reviews: 5,
            price: 400.00,
        },
        {
            id: 5,
            title: "Denim Pant",
            img: img5,
            reviews: 4,
            price: 99.00,
        },
        {
            id: 6,
            title: "Party Dress",
            img: img6,
            reviews: 5,
            price: 225.00,
        },
    ]
    return (
        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                topRates.map((topRate) => <div
                    key={topRate.id}
                >
                    <div className='flex '>
                        <div className='h-32 w-32 overflow-hidden'>
                            <img src={topRate.img} alt="Suspendisse Urna" className='h-full w-full hover:scale-150 duration-700' />
                        </div>
                        <div className='m-5'>
                            <h1 className='text-xl font-serif font-semibold'>{topRate.title}</h1>
                            <Stars review={topRate.reviews}></Stars>
                            <p>${topRate.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TopRates;