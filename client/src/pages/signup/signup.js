import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SignupForm } from "./components/signupForm/signupForm";
import { signup } from "../../store/actionCreators/auth";
import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./style.module.css";

export const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    age: "",
  });

  const dispatch = useDispatch();
  const { isAuth, errors } = useSelector((state) => state.auth);

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
    dispatch(signup(formValues));
  };

  return (
    <>
      <h1 className={styles.login_title}>Sign up Page</h1>
      <SignupForm
        handleChange={handleChange}
        formValues={formValues}
        errors={errors}
        isDisabled={false}
        onSubmit={onSubmit}
      />
    </>
  );
};
