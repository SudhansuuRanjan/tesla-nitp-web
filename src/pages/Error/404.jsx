import "./404.scss";
import error from './error.png';
import { NavLink } from "react-router-dom";

const Error = () => {
  return (

    <div className="error_container">
      <img className="error_img" src={error} alt="error"></img>
      <h1 className="error_head">404</h1>
      <p className="error_line">Oops! Page Not Found</p>
      <NavLink to={"/"} className="error_btn">Go Back</NavLink>

    </div>

  )
}

export default Error;