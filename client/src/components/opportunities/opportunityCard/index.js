import styles from "./style.module.css";

export const OpportunityCard = ({ opportunities }) => {
  return (
    <div className={styles.opportunities_container}>
      {opportunities.map((opportunityItem) => {
        return (
          <div className={styles.opportunity_item} key={opportunityItem.id}>
            <div className={styles["opportunity_item-image"]}>
              <img src={opportunityItem.img} alt="Spring Boot" />
            </div>
            <div className={styles["opportunity_item-info"]}>
              <h1 className={styles["opportunity_item-title"]}>
                {opportunityItem.title}
              </h1>
              <p className={styles["opportunity_item-description"]}>
                {opportunityItem.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
