import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Navbar = () => {
  //const navigate = useNavigate();

  const { active, account } = useWeb3React();

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
        <ul className="navbar-nav ml-auto me-2">
          {active ? (
            <span className="nav-item nav-link text-info">
              {account ? account : "no wallet"}
            </span>
          ) : (
            <ConnectWalletButton />
          )}
        </ul>
      </div>
    </nav>
  );
};
