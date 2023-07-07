import Sidebar from "@/app/components/sidebar";

const Home = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="bg-mirage h-screen">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Home
