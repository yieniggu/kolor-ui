import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  //const navigate = useNavigate();

  //const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    // const action = {
    //   type: types.logout,
    // };
    // dispatch(action);
    // localStorage.removeItem("user");
    // navigate("/login", {
    //   replace: true,
    // });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-2" to="/">
        Kolor
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
        <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/mint"
          >
            Mint
          </NavLink>
          
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/marketplace"
          >
            Marketplace
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">wallet</span>
        </ul>
      </div>
    </nav>
  );
};
