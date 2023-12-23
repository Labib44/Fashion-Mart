import ProductCard from "./ProductCard";
import img1 from "../../assets/products/1.jpg"
import img2 from "../../assets/products/2.jpg"
import img3 from "../../assets/products/3.jpg"
import img4 from "../../assets/products/5.jpg"
import img5 from "../../assets/products/11.jpg"
import img6 from "../../assets/products/7.jpg"

const Products = () => {
    const products = [
        {
            _id: 991,
            productName: "T-shirt",
            img: img1,
            price: 45,
            color: "gray",
        },
        {
            _id: 992,
            productName: "Denim Pant",
            img: img2,
            price: 75,
            color: "black",
        },
        {
            _id: 993,
            productName: "T-shirt",
            img: img3,
            price: 45,
            color: "gray",
        },
        {
            _id: 994,
            productName: "T-shirt",
            img: img4,
            price: 45,
            color: "gray",
        },
        {
            _id: 995,
            productName: "T-shirt",
            img: img5,
            price: 45,
            color: "gray",
        },
        {
            _id: 996,
            productName: "T-shirt",
            img: img6,
            price: 45,
            color: "gray",
        },
    ]
    return (
        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>

            {
                products.map((product)=><ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;