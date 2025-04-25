
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import PopUp from "../components/PopUp";
import { useState } from "react";
import FilterItems from "../components/Filters/FiltersBar";
import ProductList from "../components/ProductList";


const HomePage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpProduct, setPopUpProduct] = useState("");
    const [itemOnCart, setItemOnCart] = useState([]);

    const handleAddToCart = (product) => {
        setPopUpProduct(product);
        setShowPopUp(true);
    }
    return (<>
        <Header setIsCartOpen={setIsCartOpen} />
        <FilterItems />
        {isCartOpen && (
            <div className="fixed inset-0 bg-black/30 z-10"
                onClick={() => setIsCartOpen(false)}></div>
        )}

        <PopUp showPopUp={showPopUp} onClosePopUp={setShowPopUp} product={popUpProduct} />
        <Cart isCartOpen={isCartOpen} onCartOpen={setIsCartOpen} itemOnCart={itemOnCart} />
        <div className='container mx-auto px-4'>
            <ProductList handleAddToCart={handleAddToCart} itemOnCart={itemOnCart} onUpdateItemsOnCart={setItemOnCart} />

        </div>
        <Footer />

    </>)
};

export default HomePage;