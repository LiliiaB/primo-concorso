import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import css from "./NavBar.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
    <nav className={css.nav}>
      <Link to="/"></Link>

      <NavLink to="/" className={buildLinkClass}>
        <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
      </NavLink>
      <NavLink to="/gallery" className={buildLinkClass}>
        Gallery
      </NavLink>
      <NavLink to="/terms" className={buildLinkClass}>
        Terms and conditions
      </NavLink>
    </nav>
  );
};

export default NavBar;
