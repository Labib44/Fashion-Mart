import BreadCrumbs from "../../component/BreadCrumbs/BreadCrumbs";
import ShopSideNav from "./ShopSideNav/ShopSideNav";
import ShopBanner from "./ShopBanner/ShopBanner";
import Products from "../../component/Products/Products";



const Shop = () => {
  
    return (
        <div className=" container mx-auto px-4">
            <BreadCrumbs title="Products" />

            {/*------Products Start here-----*/}
            <div className="w-full h-full flex pb-20 gap-10">
                <div className="w-[20%] lg:w-[25%] sm:hidden md:inline-flex h-full">
                    <ShopSideNav />
                </div>
                <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
                    <ShopBanner/>
                   
                    <Products/>
                </div>
            </div>
            {/* ------ Products End here ---------*/}
        </div>
    );
};

export default Shop;