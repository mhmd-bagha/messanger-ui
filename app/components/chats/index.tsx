import Stories from "@/app/components/chats/stories";
import Search from "@/app/components/chats/search";
import Chat from "@/app/components/chats/chats";

const Chats = () => {
    return (
        <>
            <div className="bg-dark-jungle py-4 px-6 w-1/6 h-screen">
                <Stories/>
                <Search/>
                <Chat/>
            </div>
        </>
    )
}

export default Chats