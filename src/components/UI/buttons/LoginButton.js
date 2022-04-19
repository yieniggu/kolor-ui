import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenLoginModal } from "../../../actions/UI";

export const LoginButton = () => {
  const dispatch = useDispatch();

  const openLoginModal = () => {
    console.log("login button clicked");
    dispatch(uiOpenLoginModal());
  };

  return (
    <button className="btn btn-outline-success" onClick={openLoginModal}>
      <i className="fa-solid fa-user-astronaut"></i>
      <span> Sign in</span>
    </button>
  );
};
