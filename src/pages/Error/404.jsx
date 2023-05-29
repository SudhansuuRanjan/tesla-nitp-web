import "./404.scss";
import error from './error.png';

import Heading from './../../components/Headings/Heading';
import { NavLink } from "react-router-dom";

const Error = () => {
  return (

    <div className="container">
      <img className="err" src={error} alt="error"></img>
      <h1 className="head">404</h1>
      <p className="line">Oops! Page Not Found</p>
      <NavLink to={"/"} className="btn">Go Back</NavLink>

    </div>

  )
}

export default Error;