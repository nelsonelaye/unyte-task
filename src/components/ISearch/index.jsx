import styles from "./isearch.module.css";
import searchIcon from "../../assets/images/search.svg";

const ISearch = ({ type, placeholder, value, onChange, onKeyDown }) => {
  return (
    <div className={styles.input_container}>
      <span className={styles.icon}>
        <img src={searchIcon} alt="" />
      </span>

      <input
        data-testid="search"
        className={styles.Input}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onKeyDown();
          }
        }}
      />
    </div>
  );
};

export default ISearch;
