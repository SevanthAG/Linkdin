interface ITopBarElement {
  title: string;
  icon: string;
}

const TopBarElementWithDropDown = ({ title, icon }: ITopBarElement) => {
  return (
    <div>
      <img src={icon} />
      {title}
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAfCymQrNDT_hnfZBrX2NBCLTR7pBt1N1nkux9HoZ2w&s=10"} />
    </div>
  )
}

export default TopBarElementWithDropDown