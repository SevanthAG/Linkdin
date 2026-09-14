import "./TopBarElement.css";

interface ITopBarElement {
    title: string;
    icon: any;
    active?: boolean;
}

const TopBarElement = ({
    title,
    icon,
    active = false
}: ITopBarElement) => {

    return (
        <div className={`top-bar-element ${active ? "active" : ""}`}>

            <div className="top-bar-element-icon">
                {icon}
            </div>

            <span className="top-bar-element-title">
                {title}
            </span>

        </div>
    );
};

export default TopBarElement;