import Image from "next/image";
import {BsPlus} from "react-icons/bs";

const ProfileStory = () => {
    return (
        <button className="relative rounded-full border-2 border-pink-red">
            <Image src="/images/user/profile/profile.jpg" alt="user" width={50} height={50}
                   className="rounded-full p-0.5"/>
            <button
                className="bg-blue-picton-rgb text-white rounded-full border border-dark-jungle absolute -bottom-1 right-0">
                <BsPlus/></button>
        </button>
    )
}

export default ProfileStory