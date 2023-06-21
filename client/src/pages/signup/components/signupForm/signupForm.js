import styles from "./style.module.css";

export const SignupForm = ({
  formValues,
  errors,
  isDisabled,
  handleChange,
  onSubmit,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="username"
        placeholder="username"
        value={formValues.username}
        onChange={handleChange}
      />
      {errors?.["username"] ? (
        <div className={styles.errors}>{errors["username"]}</div>
      ) : (
        ""
      )}
      <input
        className={styles.form_input}
        autoComplete="off"
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleChange}
      />
      {errors?.["password"] ? (
        <div className={styles.errors}>{errors["password"]}</div>
      ) : (
        ""
      )}
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="confirmPassword"
        placeholder="confirm password"
        value={formValues.confirmPassword}
        onChange={handleChange}
      />
      {errors?.["confirmPassword"] ? (
        <div className={styles.errors}>{errors["confirmPassword"]}</div>
      ) : (
        ""
      )}
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="firstname"
        placeholder="firstname"
        value={formValues.firstname}
        onChange={handleChange}
      />
      {errors?.["firstname"] ? (
        <div className={styles.errors}>{errors["firstname"]}</div>
      ) : (
        ""
      )}
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="lastname"
        placeholder="lastname"
        value={formValues.lastname}
        onChange={handleChange}
      />
      {errors?.["lastname"] ? (
        <div className={styles.errors}>{errors["lastname"]}</div>
      ) : (
        ""
      )}
      <input
        className={styles.form_input}
        autoComplete="off"
        type="number"
        name="age"
        placeholder="age"
        value={formValues.age}
        onChange={handleChange}
      />
      {errors?.["age"] ? (
        <div className={styles.errors}>{errors["age"]}</div>
      ) : (
        ""
      )}
      <button
        className={styles.form_button}
        type="submit"
        disabled={isDisabled}
      >
        Submit
      </button>
    </form>
  );
};
