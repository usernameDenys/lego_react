import { PiLegoDuotone } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
const Header = ({ onCartOpen, onFilterOpen }) => {
    return (
        <nav className="flex items-center justify-between h-[100px] bg-amber-300 p-5 z-50 relative">
            <div className="flex items-center justify-center bg-red-600 pt-3 pb-3 pl-1 pr-1 text-white">
                <a href="/"><PiLegoDuotone size={64} color="white" /></a>
                <a href="/" className='text-4xl text-center font-[Mogra]'>Legoland</a>
            </div>

            <ul className="flex justify-between gap-6 font-[Poppins] text-gray-800 font-semibold text-2xl relative z-10">
                <li><a href="/" className="hover:text-red-600">Home</a></li>
                <li><a href="/" className="hover:text-red-600">About us</a></li>
                <li className="hover:text-red-600"><LuFilter onClick={() => onFilterOpen(true)} size={32} /></li>
                <li className="hover:text-red-600 cursor-pointer" onClick={() => onCartOpen(true)} >
                    <MdOutlineShoppingBag size={32} />
                </li>
            </ul>

        </nav>
    )
}

export default Header;