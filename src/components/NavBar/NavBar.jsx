import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </li>
      <li>Gallery</li>
      <li>Terms and conditions</li>
    </ul>
  );
};

export default NavBar;
