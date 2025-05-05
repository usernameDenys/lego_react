
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import PopUp from "../components/PopUp";
import { useState } from "react";
import FilterItems from "../components/Filters/FiltersBar";
import ProductList from "../components/ProductList";


const HomePage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpProduct, setPopUpProduct] = useState("");
    const [itemOnCart, setItemOnCart] = useState([]);
    const [totalOnCart, setTotalOnCart] = useState(0);


    const handleAddToCart = (product) => {
        setPopUpProduct(product);
        setShowPopUp(true);
    }
    return (<>
        <FilterItems isFilterOpen={isFilterOpen} onFilterOpen={setIsFilterOpen} />
        <Header onCartOpen={setIsCartOpen} onFilterOpen={setIsFilterOpen} />

        {isCartOpen && (
            <div className="fixed inset-0 bg-black/30 z-10"
                onClick={() => setIsCartOpen(false)}></div>
        )}

        <PopUp showPopUp={showPopUp} onClosePopUp={setShowPopUp} product={popUpProduct} onCartOpen={setIsCartOpen} />
        <Cart isCartOpen={isCartOpen} onCartOpen={setIsCartOpen} itemOnCart={itemOnCart} total={totalOnCart} />
        <div className='container mx-auto px-4'>
            <ProductList handleAddToCart={handleAddToCart} itemOnCart={itemOnCart} onUpdateItemsOnCart={setItemOnCart} total={totalOnCart} onUpdateTotal={setTotalOnCart} />

        </div>
        <Footer />

    </>)
};

export default HomePage;