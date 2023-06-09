import styles from "./style.module.css";

export const LoginForm = ({ formValues, handleChange, onSubmit }) => {
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
      <button className={styles.form_button} type="submit">
        Submit
      </button>
    </form>
  );
};
