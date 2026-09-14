import LeftSidebar from "./LeftSidebar/LeftSidebar";
import PostsBar from "./PostsBar/PostsBar";
import RightSidebar from "./RightSidebar/RightSidebar";

import "./Home.css";

const Home = () => {

    return (
        <div className="home">

            <div className="home-content">

                <LeftSidebar />

                <PostsBar />

                <RightSidebar />

            </div>

        </div>
    );
};

export default Home;