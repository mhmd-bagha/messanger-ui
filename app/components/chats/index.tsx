import Stories from "@/app/components/chats/stories";
import Search from "@/app/components/chats/search";

const Chats = () => {
    return (
        <>
            <div className="bg-dark-jungle py-4 px-6 w-1/6 h-screen">
                <Stories/>
                <Search/>
            </div>
        </>
    )
}

export default Chats