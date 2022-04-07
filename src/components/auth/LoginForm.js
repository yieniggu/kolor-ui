import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "dev@kolor.com",
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
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
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
