
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Cart from "../components/Cart";
import { useState } from "react";


const HomePage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (<>
        <Header setIsCartOpen={setIsCartOpen} />
        {isCartOpen && (
            <div
                className="fixed inset-0 bg-black/30 z-10"
                onClick={() => setIsCartOpen(false)}
            />
        )}
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div className='container mx-auto px-4'>
            <Cards />

        </div>
        <Footer />


    </>)



};

export default HomePage;