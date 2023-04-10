import { Outlet } from "react-router-dom";
import GuestGuard from "../../components/GuestGuard";

const GuestLayout = () => {
  return (
    <GuestGuard>
      <div className='guest_layout'>
        <Outlet />
      </div>
    </GuestGuard>
  );
};

export default GuestLayout;
