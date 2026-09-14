import { ChevronDown } from "lucide-react";
import "./TopBarElementWithDropDown.css";

interface ITopBarElement {
    title: string;
    icon: any;
}

const TopBarElementWithDropDown = ({ title, icon }: ITopBarElement) => {
    return (
        <div className="top-bar-dropdown">

            <div className="dropdown-profile">
                {icon}
            </div>

            <div className="dropdown-title">
                {title}
            </div>

            <ChevronDown className="dropdown-chevron" />

        </div>
    );
};

export default TopBarElementWithDropDown;