import {CiSearch} from "react-icons/ci";

const Search = () => {
    return (
        <>
            <div className="flex justify-between py-7">
                <p className="text-lg text-white font-medium">Messages</p>
                <p className="text-sm text-blue-rgb font-medium">48 New</p>
            </div>
            {/* searchbar */}
            <div className="relative">
                <CiSearch size={26} className="text-liver absolute right-3 top-2.5"/>
                <input type="search" placeholder="Searching anything"
                       className="bg-mirage text-white placeholder:text-liver w-full py-3 px-4 rounded-2xl outline-none"/>
            </div>
        </>
    )
}

export default Search