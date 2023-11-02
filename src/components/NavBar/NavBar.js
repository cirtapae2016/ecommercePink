// import "./NavBar.css";
// import "bulma/css/bulma.css";

import { NavLink, Link } from "react-router-dom";

import logoEcommerce from "./assets/logoEcommerce.png";

import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <Link className="navbar-brand" to="/">
        <img src={logoEcommerce} alt="Mi logo" width="100" />
      </Link>
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <NavLink
            to={`/category/hombre`}
            className={({ isActive }) =>
              isActive ? "navbar-item is-tab is-active" : "navbar-item is-tab"
            }
          >
            Hombre
          </NavLink>
          <NavLink
            to={`/category/mujer`}
            className={({ isActive }) =>
              isActive ? "navbar-item is-tab is-active" : "navbar-item is-tab"
            }
          >
            Mujer
          </NavLink>
          <NavLink
            to={`/category/joyeria`}
            className={({ isActive }) =>
              isActive ? "navbar-item is-tab is-active" : "navbar-item is-tab"
            }
          >
            Joyería
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
