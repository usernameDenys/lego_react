import { IoClose } from "react-icons/io5";

const FilterItems = ({ isFilterOpen, onFilterOpen }) => {
    return <div
        className={`absolute top-0 w-full bg-gray-50 transition-transform duration-500 z-40 ${isFilterOpen ? "translate-y-[100px]" : "-translate-y-full"
            }`}
    >

        <p className="text-center pt-3 pb-3">this is my filter component</p>
        <button
            className="absolute top-4 right-4 text-2xl hover:text-red-600"
            onClick={() => onFilterOpen(false)}
        >
            <IoClose />
        </button>
    </div>
}

export default FilterItems;