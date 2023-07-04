import ProfileStory from "@/app/components/sidebar/profile-story";
import Folders from "@/app/components/sidebar/folders";

const Sidebar = () => {
    return (
        <div className="py-4 px-3">
            {/* profile story */}
            <ProfileStory/>
            {/* folders */}
            <Folders/>
        </div>
    )
}

export default Sidebar