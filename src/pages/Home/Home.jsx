import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;