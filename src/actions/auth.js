import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { uiCloseLoginModal } from "./UI";

export const login = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken("auth", { email, password }, "POST");

    const body = await resp.json();

    if (body.ok) {
      saveTokenOnLocalStorage(body.token);

      dispatch(uiCloseLoginModal());
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

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken("auth/refresh");

    const body = await resp.json();
    console.log(body);

    if (body.ok) {
      saveTokenOnLocalStorage(body.token);

      dispatch(
        loginAction({
          uid: body.uid,
          name: body.name,
          role: body.role,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });
