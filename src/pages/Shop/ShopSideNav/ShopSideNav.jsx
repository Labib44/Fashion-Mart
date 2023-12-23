import Brand from "./Brand/Brand";
import Categories from "./Categories/Categories";
import Color from "./Color/Color";
import Price from "./Price/Price";


const ShopSideNav = () => {
    return (
        <div className="w-full flex flex-col gap-6">
            <Categories icons={false}></Categories>
            <Color></Color>
            <Brand></Brand>
            <Price></Price>
        </div>
    );
};

export default ShopSideNav;