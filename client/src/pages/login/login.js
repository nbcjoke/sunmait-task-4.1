import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "./components";
import { login } from "../../store/actionCreators/login";
import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./style.module.css";

export const Login = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.HOME);
    }
  }, [isAuth]);

  const handleChange = useCallback(({ target }) => {
    const { value, name } = target;

    setFormValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // if (formValues.username === "admin" && formValues.password === "1234") {
    //   dispatch(LOGIN_SUCCESS(formValues));
    // } else {
    //   alert("Login failed");
    // }
    dispatch(login(formValues));
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
