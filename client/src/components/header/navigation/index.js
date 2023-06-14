import { useState } from "react";

import { navigationItems } from "../../../mocks/navigationItems";

import styles from "./style.module.css";

export const Navigation = () => {
  const [navigation] = useState(navigationItems);

  return (
    <nav className={styles.header_navigation}>
      <ul className={styles["header_navigation-list"]}>
        {navigation.map((elem) => {
          return (
            <li key={elem.id} className={styles["header_navigation-item"]}>
              <a href={elem.link} className={styles["header_navigation-link"]}>
                {elem.label}
              </a>
              <div className={styles["dropdown-content"]}>
                {elem.children?.map((child) => {
                  return (
                    <a key={child.id} href={child.link}>
                      {child.label}
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
