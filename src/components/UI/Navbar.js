import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ConnectWalletButton } from "./buttons/ConnectWalletButton";
// import { ConnectWalletButton } from "./ConnectWalletButton";

export const Navbar = () => {
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
            to="/admin"
          >
            Admin
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
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto me-2">
          <ConnectWalletButton />
        </ul>
      </div>
    </nav>
  );
};
