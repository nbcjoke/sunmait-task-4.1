import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "./components";
import { connect } from "../../custom-redux";
import { loginSuccess } from "../../store/reducers/loginReducer";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./style.module.css";

export const Login = ({ value, loginSuccess }) => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (isAuth) {
  //       navigate(ROUTE_NAMES.HOME);
  //     }
  //   }, [isAuth]);

  console.log(loginSuccess);
  console.log(value);
  const handleChange = useCallback(({ target }) => {
    const { value, name } = target;

    setFormValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (formValues.username === "admin" && formValues.password === "1234") {
      loginSuccess();
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <h1 className={styles.login_title}>Login Page</h1>
      <LoginForm
        handleChange={handleChange}
        formValues={formValues}
        onSubmit={onSubmit}
      />
    </>
  );
};
