import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import NewProducts from "./NewProducts/NewProducts";
import ProductsMiniature from "./ProductsMiniature/ProductsMiniature";
import SpecialOffer from "./SpecialOffer/SpecialOffer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialOffer></SpecialOffer>
            <NewProducts></NewProducts>
            <ProductsMiniature></ProductsMiniature>
            <Brands></Brands>
        </div>
    );
};

export default Home;