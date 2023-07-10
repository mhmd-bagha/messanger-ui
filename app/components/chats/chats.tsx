import Image from "next/image";
import {BsCheck2, BsCheck2All} from "react-icons/bs";
import {PiMicrophoneThin} from "react-icons/pi";
import {Chat} from "@/app/types/chats";

const Chats = () => {
    const chats: Chat[] = [
        {
            user_image: '/images/user/profile/profile.jpg',
            user_name: 'John',
            type_message: 'voice',
            status_message: true,
            latest_time: '21:05'
        },
        {
            user_image: '/images/user/profile/profile.jpg',
            user_name: 'satoshi',
            type_message: 'voice',
            status_message: false,
            latest_time: '21:05'
        },
    ]

    return (
        <div className="h-4/6 overflow-y-scroll">
            {chats.map((chat, index) => (
                <>
                    <div className="flex justify-between items-center pt-9 cursor-pointer" key={index}>
                        <div className="flex justify-between items-center">
                            {/* user image */}
                            <Image src={chat.user_image} alt="" width={50} height={50}
                                   className="rounded-full"/>
                            {/* name and latest message */}
                            <div className="pl-3">
                                <p className="text-white pb-2">{chat.user_name}</p>
                                <p className="text-secandray text-sm flex justify-between items-center capitalize">
                                    <PiMicrophoneThin size={18}/>
                                    <span className="overflow-hidden">{chat.type_message} message</span>
                                </p>
                            </div>
                        </div>
                        {/* time */}
                        <div>
                            {chat.status_message ? <BsCheck2All size={20} className="text-green-500"/> :
                                <BsCheck2 size={20} className="text-secandray"/>}
                            <p className="text-sm text-secandray">{chat.latest_time}</p>
                        </div>
                    </div>
                    <p className="bg-liver h-px w-full mt-7 rounded-full after:content-['']"/>
                </>
            ))}
        </div>
    )
}

export default Chats