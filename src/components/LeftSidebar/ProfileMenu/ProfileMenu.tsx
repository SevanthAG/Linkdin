import {
    Bookmark,
    CalendarDays,
    Newspaper,
    Users
} from "lucide-react";

import "./ProfileMenu.css";

const ProfileMenu = () => {
    return (
        <div className="profile-menu">

            <div className="profile-menu-item">
                <Bookmark />
                <span>Saved items</span>
            </div>

            <div className="profile-menu-item">
                <Users />
                <span>Groups</span>
            </div>

            <div className="profile-menu-item">
                <Newspaper />
                <span>Newsletters</span>
            </div>

            <div className="profile-menu-item">
                <CalendarDays />
                <span>Events</span>
            </div>

        </div>
    );
};

export default ProfileMenu;