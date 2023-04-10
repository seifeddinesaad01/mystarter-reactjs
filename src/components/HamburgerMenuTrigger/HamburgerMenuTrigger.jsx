import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../data/slices/settingsSlice";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import useWindowSize from "../../hooks/useWindowSize";

const HamburgerMenuTrigger = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  if (width >= 1090) return null;

  return (
    <div
      className='hamburger__bouton'
      onClick={() => dispatch(toggleSidebar())}
    >
      <MenuIcon />
    </div>
  );
};

export default HamburgerMenuTrigger;
