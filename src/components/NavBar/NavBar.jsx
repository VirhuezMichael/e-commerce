import CartWidget from "../Cart/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="brand-container">
        <h1 className="brand-title">L&B 3D</h1>
      </div>
      <div className="items-container">
        <ul className="navitems">
          <li>
            <a className="item" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="item" href="#">
              Productos
            </a>
          </li>
          <li>
            <a className="item" href="#">
              Ofertas Especiales
            </a>
          </li>
          <li>
            <a className="item" href="#">
              Accesorios
            </a>
          </li>
        </ul>
      </div>
      <div className="cart-container">
        <CartWidget />
      </div>
      <div>
        <img
          className="login"
          src="../public/icons/user.png"
          alt="login-icon"
        />
      </div>
    </div>
  );
};
export default NavBar;
