import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./data/slices/authSlice";
import { openModal } from "./data/slices/modals";
import useIsMounted from "./hooks/useIsMountedRef";

function App() {
  const isMounted = useIsMounted();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isMounted.current) return;
    dispatch(login({ username: "demo@gomydesk.io", password: "Password123" }));
  }, [dispatch]);
  const handleClick = () => {
    dispatch(openModal("modal-example"));
  };
  return (
    <div className="app">
      <h3>Hello Starter</h3>
      <button onClick={handleClick}>open modal</button>
    </div>
  );
}

export default App;
