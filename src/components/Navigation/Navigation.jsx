import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../data/slices/settingsSlice";

const NavigationLink = ({ icon = null, route = "/", children }) => {
  const dispatch = useDispatch();
  return (
    <NavLink
      to={route}
      className="navigation_link"
      onClick={() => dispatch(closeSidebar())}
    >
      {icon}
      <span className="navigation_link__label">{children}</span>
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <div className="navigation__container">
      <NavigationLink route="/" icon={<HomeIcon />}>
        Home
      </NavigationLink>
      <NavigationLink route="/about" icon={<HomeIcon />}>
        About
      </NavigationLink>
    </div>
  );
};

export default Navigation;
