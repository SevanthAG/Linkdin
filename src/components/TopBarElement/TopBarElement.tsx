import "./TopBarElement.css";

interface ITopBarElement {
  title: string;
  icon: React.ReactNode;
}

const TopBarElement = ({ title, icon }: ITopBarElement) => {
  return (
    <div className="top-bar-element">
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