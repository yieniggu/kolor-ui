import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { uiCloseModal } from "./UI";

export const login = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken("auth", { email, password }, "POST");

    const body = await resp.json();

    if (body.ok) {
      saveTokenOnLocalStorage(body.token);

      dispatch(uiCloseModal());
      dispatch(
        loginAction({ uid: body.uid, name: body.name, role: body.role })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

const loginAction = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logoutAction());
  };
};

const logoutAction = () => ({ type: types.authLogout });

const saveTokenOnLocalStorage = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("token-init-date", new Date().getTime());
};
