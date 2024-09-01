import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div>
      <a href="./index.html">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Header;
