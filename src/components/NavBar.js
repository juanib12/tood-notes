import '../App.css'
import LogoNavBar from '../images/logo-navbar.png'

const NavBar = () => {
  return (
    <header>
      <div className="menu_container-navbar">
        <div className="logo-navbar">
          <img src={LogoNavBar} />
        </div>
      </div>
    </header>
  );
};
export default NavBar;
