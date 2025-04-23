import { IoClose } from "react-icons/io5";

const Cart = () => {


    return (


        <div className={"fixed top-0 right-0 h-full w-100 bg-white shadow-lg p-6 transition-transform duration-300 ease-in-out z-20"}>
            <button
                className="absolute top-4 right-4 text-2xl hover:text-red-600"

            >
                <IoClose />
            </button>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <p>Your cart is currently empty....</p>
        </div>




    );
};

export default Cart;
