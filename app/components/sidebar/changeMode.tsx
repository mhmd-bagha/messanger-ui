'use client';


import {IoIosMoon} from "react-icons/io";
import {useState} from "react";
import {IoMoonOutline} from "react-icons/io5";
import {BiSolidSun, BiSun} from "react-icons/bi";

const ChangeMode = () => {
    const [changeMode, setChangeMode] = useState<boolean>(false)

    return (
        <div className="py-20 grid place-items-center">
            <div className="bg-dark-jungle w-10 relative rounded-full">
                <input type="checkbox" id="changeMode" className="opacity-0 absolute" checked={changeMode}
                       onChange={() => setChangeMode(!changeMode)}/>

                <button
                    className={`bg-mirage rounded-full absolute top-4 right-2 transition-all duration-500 w-6 h-12 ${changeMode && 'translate-y-10'}`}/>

                <label htmlFor="changeMode" className="grid place-items-center relative w-full h-28 p-2">
                    {changeMode ? <IoIosMoon size={20} className="text-blue-picton-rgb"/> :
                        <IoMoonOutline size={20} className="text-blue-300"/>}

                    {!changeMode ? <BiSolidSun size={20} className="text-blue-picton-rgb"/> :
                        <BiSun size={20} className="text-blue-300"/>}
                </label>
            </div>
        </div>
    )
}

export default ChangeMode