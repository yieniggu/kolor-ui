import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/auth";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Logout</span>
      </button>
    </div>
  );
};
