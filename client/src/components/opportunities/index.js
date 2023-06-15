import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOpportunities } from "../../store/actionCreators/opportunities";
import { useDebounce } from "../../hooks/useDebounce";
import { OpportunityCard } from "./opportunityCard";

import styles from "./style.module.css";

export const Opportunities = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);
  const dispatch = useDispatch();
  const { opportunities } = useSelector((state) => state.opportunities);

  console.log(opportunities);
  useEffect(() => {
    dispatch(getOpportunities(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className={styles.opportunities_wrapper}>
      <input
        placeholder="Search..."
        className={styles.input}
        type="search"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!opportunities?.length ? (
        <h2 className={styles.error_title}>No results</h2>
      ) : (
        <OpportunityCard opportunities={opportunities} />
      )}
    </div>
  );
};
