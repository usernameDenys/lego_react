import { IoClose } from "react-icons/io5";

const Cart = ({ isCartOpen, onCartOpen, itemOnCart }) => {


    return (


        <div className={`fixed top-0 right-0 h-full w-80 p-5 bg-white transition-transform duration-300 z-20 ${isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <button
                className="absolute top-4 right-4 text-2xl hover:text-red-600"
                onClick={() => onCartOpen(false)}
            >
                <IoClose />
            </button>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <ul>
                {itemOnCart.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <button>Delete</button>

        </div>






    );
};

export default Cart;
