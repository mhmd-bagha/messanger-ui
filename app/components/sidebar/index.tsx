import ProfileStory from "@/app/components/sidebar/profile-story";
import Folders from "@/app/components/sidebar/folders";
import ChangeMode from "@/app/components/sidebar/changeMode";

const Sidebar = () => {
    return (
        <div className="bg-mirage h-full lg:h-screen py-4 px-3">
            {/* profile story */}
            <ProfileStory/>
            {/* folders */}
            <Folders/>
            {/* dark and light mode */}
            <ChangeMode/>
        </div>
    )
}

export default Sidebar