import styles from "./style.module.css";

export const SignupForm = ({ formValues, handleChange, onSubmit }) => {
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
      <input
        className={styles.form_input}
        autoComplete="off"
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="confirmPassword"
        placeholder="confirm password"
        value={formValues.confirmPassword}
        onChange={handleChange}
      />
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="firstname"
        placeholder="firstname"
        value={formValues.firstname}
        onChange={handleChange}
      />
      <input
        className={styles.form_input}
        autoComplete="off"
        type="text"
        name="lastname"
        placeholder="lastname"
        value={formValues.lastname}
        onChange={handleChange}
      />
      <input
        className={styles.form_input}
        autoComplete="off"
        type="number"
        name="age"
        placeholder="age"
        value={formValues.age}
        onChange={handleChange}
      />
      <button className={styles.form_button} type="submit">
        Submit
      </button>
    </form>
  );
};
