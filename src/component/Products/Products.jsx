import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getMyApi = async () => {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URI}/api/v1/product`)
        setProducts(res.data.data);
    }

    useEffect(() => {
        getMyApi()
    }, [])
    

    return (
        <div className=' grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>

            {
                products?.map((product) => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;