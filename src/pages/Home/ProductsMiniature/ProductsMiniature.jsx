import { useState } from "react";
import ExclusiveProducts from "./ExclusiveProducts/ExclusiveProducts";
import TopRates from "./TopRates/TopRates";
import NewCollections from "./NewCollections/NewCollections";


const ProductsMiniature = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className=' container mx-auto my-20 p-5'>

        <div>
            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-10">
                <button
                    onClick={() => toggleTab(1)}
                    type=""
                    className={
                        toggleState === 1
                            ? "font-bold flex justify-center border-b-4 border-gray-400 text-gray-700 text-xl py-4"
                            : "flex justify-center text-accent text-xl py-4"
                    }
                >
                    BEST SELLERS
                </button>
                <button
                    onClick={() => toggleTab(2)}
                    type=""
                    className={
                        toggleState === 2
                            ? "font-bold flex justify-center border-b-4 border-gray-400 text-gray-700 text-xl py-4"
                            : "flex justify-center text-accent text-xl py-4"
                    }
                >
                    HOT PRODUCTS
                </button>
                <button
                    onClick={() => toggleTab(3)}
                    type=""
                    className={
                        toggleState === 3
                            ? "font-bold flex justify-center border-b-4 border-gray-400 text-gray-700 text-xl py-4"
                            : "flex justify-center text-accent text-xl py-4"
                    }
                >
                    TOP RATES
                </button>
            </div>
            <div className={toggleState === 1 ? " block" : " hidden"}>
                <ExclusiveProducts></ExclusiveProducts>
            </div>

            <div className={toggleState === 2 ? " block" : " hidden"}>
               <NewCollections></NewCollections>
            </div>

            <div className={toggleState === 3 ? " block" : " hidden"}>
                <TopRates></TopRates>
            </div>
        </div>
    </div>
    );
};

export default ProductsMiniature;