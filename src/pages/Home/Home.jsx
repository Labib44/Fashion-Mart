import Banner from "./Banner/Banner";
import NewArrivals from "./NewArrivals/NewArrivals";
import ProductsMiniature from "./ProductsMiniature/ProductsMiniature";
import SpecialOffer from "./SpecialOffer/SpecialOffer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialOffer></SpecialOffer>
            <NewArrivals></NewArrivals>
            <ProductsMiniature></ProductsMiniature>
        </div>
    );
};

export default Home;