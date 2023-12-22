import Stars from "../../../../component/Stars/Stars";
import img1 from "../../../../assets/home/productsMiniature/newCollections/1.jpg"
import img2 from "../../../../assets/home/productsMiniature/newCollections/2.jpg"
import img3 from "../../../../assets/home/productsMiniature/newCollections/3.jpg"
import img4 from "../../../../assets/home/productsMiniature/newCollections/4.jpg"
import img5 from "../../../../assets/home/productsMiniature/newCollections/5.jpg"
import img6 from "../../../../assets/home/productsMiniature/newCollections/6.jpg"

const NewCollections = () => {
    const newCollections = [
        {
            id: 1,
            title: "Half T-Shirt",
            img: img1,
            reviews: 2.3,
            price: 145.00,
        },
        {
            id: 2,
            title: "Tops",
            img: img2,
            reviews: 3,
            price: 45.00,
        },
        {
            id: 3,
            title: "Belted Dress",
            img: img3,
            reviews: 5,
            price: 335.00,
        },
        {
            id: 4,
            title: "Formal pant",
            img: img4,
            reviews: 5,
            price: 400.00,
        },
        {
            id: 5,
            title: "Comfy Trouser",
            img: img5,
            reviews: 4,
            price: 99.00,
        },
        {
            id: 6,
            title: "Olive Colour Pant",
            img: img6,
            reviews: 5,
            price: 225.00,
        },
    ]
    return (
        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                newCollections.map((newCollection) => <div
                    key={newCollection.id}
                >
                    <div className='flex '>
                        <div className='h-32 w-32 overflow-hidden'>
                            <img src={newCollection.img} alt="Suspendisse Urna" className='h-full w-full hover:scale-150 duration-700' />
                        </div>
                        <div className='m-5'>
                            <h1 className='text-xl font-serif font-semibold'>{newCollection.title}</h1>
                            <Stars review={newCollection.reviews}></Stars>
                            <p>${newCollection.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default NewCollections;