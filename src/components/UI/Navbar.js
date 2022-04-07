import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LoginButton } from "./buttons/LoginButton";
import { LogoutButton } from "./buttons/LogoutButton";

export const Navbar = () => {
  const { checking, uid, role } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-2" to="/">
        Kolor
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {role === "admin" && (
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/admin"
            >
              Admin
            </NavLink>
          )}

          {!!uid && (
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          )}

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/marketplace"
          >
            Marketplace
          </NavLink>
        </div>
        <div className="navbar-nav ms-auto me-3">
          {!!uid ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
};
