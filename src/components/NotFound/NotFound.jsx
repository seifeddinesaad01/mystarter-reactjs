import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as NotFoundImg } from "../../assets/images/Not_found.svg";

function NotFound() {
  return (
    <div className="not__found__container">
      <NotFoundImg />
      <p>Oops. The page you were looking for doesn’t exist</p>
      <Link to={"/"}>Take me back to the home page</Link>
    </div>
  );
}
export default NotFound;
