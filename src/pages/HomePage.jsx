
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Cart from "../components/Cart";
import PopUp from "../components/PopUp";
import { useState } from "react";


const HomePage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpProduct, setPopUpProduct] = useState("");

    const handleAddToCart = (product) => {
        setPopUpProduct(product);
        setShowPopUp(true);
    }
    return (<>
        <Header setIsCartOpen={setIsCartOpen} />
        {isCartOpen && (
            <div className="fixed inset-0 bg-black/30 z-10"
                onClick={() => setIsCartOpen(false)}></div>
        )}
        <PopUp showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)} product={popUpProduct} />
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div className='container mx-auto px-4'>
            <Cards handleAddToCart={handleAddToCart} />

        </div>
        <Footer />

    </>)
};

export default HomePage;