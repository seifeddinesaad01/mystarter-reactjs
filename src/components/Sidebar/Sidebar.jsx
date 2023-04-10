import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../data/slices/settingsSlice";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import useWindowSize from "../../hooks/useWindowSize";
import Navigation from "../Navigation/Navigation";
const CloseSidebarTrigger = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  if (width >= 1090) return null;

  return (
    <div
      className="close_sidebar_trigger"
      onClick={() => dispatch(closeSidebar())}
    >
      <CloseIcon />
    </div>
  );
};

const Sidebar = () => {
  const { isSidebarOpened } = useSelector((state) => state.settings);
  const { width } = useWindowSize();
  return (
    <div
      className={
        isSidebarOpened === true && width < 1090 ? "sidebar open" : "sidebar"
      }
    >
      <div className="sidebar__group">
        <div className="logo__container">
          <a style={{ cursor: "pointer" }} href="/">
            {/* <LogoIcon /> */}logo
          </a>
          {/* <Logo /> */}
          <CloseSidebarTrigger />
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Sidebar;
