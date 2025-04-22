import { PiLegoDuotone } from "react-icons/pi";
import Nav from "./Nav";
const Header = () => {
    return (
        <nav className='flex items-center justify-between h-30 mb-10 bg-amber-300 p-5'>
            <div className="flex items-center justify-center bg-red-600 pt-3 pb-3 pl-1 pr-1 text-white">
                <a href="/"><PiLegoDuotone size={64} color="white" /></a>
                <a href="/" className='text-4xl text-center font-[Mogra]'>Legoland</a>
            </div>

            <Nav />


        </nav>
    )
}

export default Header;