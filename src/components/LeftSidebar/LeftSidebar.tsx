import ProfileCard from "./ProfileCard/ProfileCard";
import PremiumCard from "./PremiumCard/PremiumCard";
import AnalyticsCard from "./AnalyticsCard/AnalyticsCard";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

import "./LeftSidebar.css";

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">

            <ProfileCard />

            <PremiumCard />

            <AnalyticsCard />

            <ProfileMenu />

        </div>
    );
};

export default LeftSidebar;