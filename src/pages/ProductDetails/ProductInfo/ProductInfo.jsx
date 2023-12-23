

const ProductInfo = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">productName</h2>
            <p className="text-xl font-semibold">$price</p>
            <p className="text-base text-gray-600">des</p>
            <p className="text-sm">Be the first to leave a review.</p>
            <p className="font-medium text-lg">
                <span className="font-normal">Colors:</span> color
            </p>
            <button className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont">
                Add to Cart
            </button>
            <p className="font-normal text-sm">
                <span className="text-base font-medium"> Categories:</span> Spring
                collection, Streetwear, Women Tags: featured SKU: N/A
            </p>
        </div>
    );
};

export default ProductInfo;