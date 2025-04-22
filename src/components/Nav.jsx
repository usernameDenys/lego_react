import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
const Nav = () => {
    return <ul className="flex justify-between gap-6 font-[Poppins] font-semibold text-2xl ">
        <li><a href="/" className="hover:text-red-600">Home</a></li>
        <li><a href="/" className="hover:text-red-600">About us</a></li>
        <li className="hover:text-red-600"><FiHeart size={32} /></li>
        <li className="hover:text-red-600"><MdOutlineShoppingBag size={32} /></li>

    </ul>
}

export default Nav;