import CColumn from "../../components/CColumn";
import styles from "../../styles/compare.module.css";

const Comapre = () => {
  return (
    <main className={styles["compare-view"]}>
      <h3
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "500",
        }}
      >
        Learn the difference
      </h3>
      <div className={styles.column_container}>
        <CColumn />
        <CColumn />
      </div>
    </main>
  );
};

export default Comapre;
