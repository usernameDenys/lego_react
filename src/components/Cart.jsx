import { IoClose } from "react-icons/io5";

const Cart = ({ isCartOpen, onCartOpen, itemOnCart, total }) => {


    return (


        <div className={`fixed top-0 right-0 h-full w-80 p-5 bg-white transition-transform duration-300 z-60 ${isCartOpen ? "translate-x-0" : "translate-x-full"
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
                    <li>{item} <button>Delete</button> </li>
                ))}
            </ul>
            {!total ? <p>Your shopping cart is empty</p> : <p>Your total: {total}€</p>}


        </div>






    );
};

export default Cart;
