import { Outlet } from "react-router-dom";
import AuthGuard from "../../components/AuthGuard";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Backdrop from "../../components/Backdrop";

const MainLayout = () => {
  return (
    // <AuthGuard>
    <div className="main_layout">
      <Sidebar />
      <div className="main_layout__container">
        <Header />
        <Outlet />
      </div>
      <Backdrop />
    </div>
    // </AuthGuard>
  );
};

export default MainLayout;
