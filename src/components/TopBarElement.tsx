interface ITopBarElement {
  title: string;
  icon: string;
}

const TopBarElement = ({ title, icon }: ITopBarElement) => {
  return (
    <div>
        <img src={icon} />
        {title}
    </div>
  )
}

export default TopBarElement