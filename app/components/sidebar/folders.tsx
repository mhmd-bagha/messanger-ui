'use client';

import {FoldersChat} from "@/app/types/sidebar";
import {BiSolidMessage} from "react-icons/bi";
import {BsFillBookmarkDashFill, BsFillTelephoneFill, BsFolderFill} from "react-icons/bs";
import {useState} from "react";
import {FaUserGroup} from "react-icons/fa6";
import {RiSettingsFill} from "react-icons/ri";

const Folders = () => {
    const [idButton, setIdButton] = useState<number>(0)

    const folders: FoldersChat[] = [
        {
            title: 'chats',
            icon: BiSolidMessage
        },
        {
            title: 'unseen',
            icon: BsFillBookmarkDashFill,
            sub_line: true
        },
        {
            title: 'channels',
            icon: BsFolderFill
        },
        {
            title: 'groups',
            icon: FaUserGroup,
            sub_line: true
        },
        {
            title: 'calls',
            icon: BsFillTelephoneFill,
            sub_line: true
        },
        {
            title: 'calls',
            icon: RiSettingsFill,
        },
    ]

    const activeClassFolder = (id: number) => {
        setIdButton(id)
    }

    const existButtonForActivated = (id: number) => {
        return idButton === id
    }

    return (
        <div className="py-14 grid place-items-center">
            {folders.map((folder, index) => {
                const checkActiveButton = existButtonForActivated(index)

                return (
                    <>
                        <button
                            className={`relative block my-2 py-2 ${checkActiveButton ? 'text-blue-picton-rgb' : 'text-liver'}`}
                            key={index} title={folder.title}
                            onClick={() => activeClassFolder(index)}>
                            <folder.icon size={22} className=""/>
                            {checkActiveButton &&
                                <p className="bg-blue-picton-rgb h-10 w-1 rounded-full absolute left-12 top-1 after:content-['']"/>}
                        </button>

                        {folder.sub_line && <p className="bg-liver h-px w-12 my-4 rounded-full after:content-['']"/>}
                    </>
                )
            })}
        </div>
    )
}

export default Folders