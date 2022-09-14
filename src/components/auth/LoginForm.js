import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginForm = ({ setLogin }) => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "client@kolor.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div onClick={() => setLogin(false)}>
              <a className="text-center">Dont have an account?</a>
            </div>
            <div className="form-group text-center">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
