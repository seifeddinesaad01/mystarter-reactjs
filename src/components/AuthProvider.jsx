import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialise, setSession } from "../data/slices/authSlice";
// import jwtDecode from "jwt-decode";
import axios from "../utils/axios";
import useIsMounted from "../hooks/useIsMountedRef";

const AuthProvider = ({ children }) => {
  const isMounted = useIsMounted();

  const { isInitialised } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isValidToken = (token) => {
    if (!token) {
      return false;
    }

    // const decoded = jwtDecode(token);
    // const currentTime = Date.now() / 1000;

    return true;
    // return decoded.exp > currentTime;
  };

  useEffect(() => {
    if (!isMounted.current) return;

    (async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (token && isValidToken(token)) {
          setSession(token);
          const response = await axios.get("/whoami");
          const user = response.data.payload;
          dispatch(initialise({ isAuthenticated: true, user }));
        } else {
          dispatch(initialise({ isAuthenticated: false, user: null }));
          setSession(null);
        }
      } catch (err) {
        dispatch(initialise({ isAuthenticated: false, user: null }));
      }
    })();
  }, []);

  if (!isInitialised) {
    return <>SplashScreen</>;
  }

  return <>{children}</>;
};

export default AuthProvider;
