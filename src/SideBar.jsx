import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
// import { Link } from "react-router-dom";

const SideBar = () => {
    return (
      <div className="sidebar">
        <SideBarIcon icon={<FaFire size="28"/>} text="Account" to="/" />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32"/>} text="Add" to="/add" />
        <SideBarIcon icon={<BsFillLightningFill size="20"/>} text="Lightning" to="/lightning" />
        <SideBarIcon icon={<FaPoo size="20"/>} text="Poop" to="/poop" />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22"/>} text="Settings" to="/settings" />
      </div>
    )
  }
  

const SideBarIcon = ({icon, text, to}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar