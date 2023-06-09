import { useState } from "react";

import styles from "./style.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className={styles.login_title}>Login Page</h1>
      <form className={styles.form}>
        <input
          className={styles.form_input}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.form_input}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.form_button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
