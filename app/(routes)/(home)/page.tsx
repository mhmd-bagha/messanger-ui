import Sidebar from "@/app/components/sidebar";
import Layout from "@/app/customLayout";
import Chats from "@/app/components/chats";

const Home = () => {
    return (
        <Layout>
            <Sidebar/>
            <Chats/>
        </Layout>
    )
}

export default Home
