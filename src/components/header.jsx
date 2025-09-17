import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { images }  from "../constants"
function Header() {
  return (
    <header>
      <h1>This is the beginning of the site</h1>
      <div class='logo'>
         <img
          src={images.logo} 
          alt="Logo"
          className="logo-img"
        />
      </div>
      <nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About </Link>
    <Link to={"/contacts"}>Contacts</Link>
    <Link to={"/home"}>home</Link>
    <Link to={"/message"}>message</Link>
     </nav>
    </header>
  );
}



export default Header;
