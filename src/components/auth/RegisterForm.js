import React from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const RegisterForm = ({ setLogin }) => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    rname: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password1));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Sign Up</h3>
          <form onSubmit={handleRegister}>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
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
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleInputChange}
              />
              <label htmlFor="password1">Password</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleInputChange}
              />
              <label htmlFor="password2">Confirm Password</label>
            </div>
            <div onClick={() => setLogin(true)}>
              <a className="text-center">Already have an account?</a>
            </div>
            <div className="form-group text-center">
              <input type="submit" className="btnSubmit" value="Sign up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
