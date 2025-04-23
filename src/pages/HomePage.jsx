
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Cart from "../components/Cart";


const HomePage = () => (
    <>
        <Header />
        {/* <Cart /> */}
        <div className='container mx-auto px-4'>
            <Cards />
        </div>
        <Footer />
    </>


);

export default HomePage;