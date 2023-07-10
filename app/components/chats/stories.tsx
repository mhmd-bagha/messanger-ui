import Image from "next/image";

const Stories = () => {
    const stories = [
        {
            id: 1,
            user_id: 1,
            user_image: '/images/user/profile/profile.jpg',
        },
        {
            id: 2,
            user_id: 1,
            user_image: '/images/user/profile/profile.jpg',
        },
        {
            id: 3,
            user_id: 1,
            user_image: '/images/user/profile/profile.jpg',
        },
        {
            id: 4,
            user_id: 1,
            user_image: '/images/user/profile/profile.jpg',
        },
        {
            id: 5,
            user_id: 1,
            user_image: '/images/user/profile/profile.jpg',
        },
        {
            id: 6,
            user_id: 1,
            user_image: '/images/user/profile/profile.jpg',
        },
    ]

    return (
        <>
            <div className="grid grid-flow-col overflow-x-scroll gap-x-3 pl-4">
                {stories.map((story, index) => (
                    <button className="w-14 rounded-full border-2 border-pink-red" key={index}>
                        <Image src={story.user_image} alt="user" width={50} height={50}
                               className="rounded-full p-0.5"/>
                    </button>
                ))}
            </div>
            <p className="bg-liver h-px w-full mt-5 rounded-full after:content-['']"/>
        </>
    )
}

export default Stories