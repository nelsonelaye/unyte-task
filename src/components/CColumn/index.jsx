import ISearch from "../ISearch";
import products from "../../data/products";
import { useState } from "react";
import styles from "./ccolumn.module.css";

const CColumn = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [data, setData] = useState({});

  const handleSearch = () => {
    const data = products.filter((e) =>
      e.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log(data);
    setResult(data);
  };
  return (
    <section className={styles.column_container}>
      <ISearch
        type="text"
        placeholder="Search something"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setTimeout(() => {
            handleSearch();
          }, 2000);
        }}
        onKeyDown={handleSearch}
      />

      {result.length !== 0 && (
        <div className={styles.search_result}>
          {result?.map((e) => (
            <div
              key={e.name}
              onClick={() => {
                setData(e);
                setResult([]);
              }}
            >
              {e.name}
            </div>
          ))}
        </div>
      )}

      <div className={styles.data_container}>
        <h3 className={styles.name}>{data?.name}</h3>
        <p className={styles.price}>{data?.price && `$${data?.price}`}</p>
        <p
          className={styles.description}
          style={{
            fontSize: "18px",
          }}
        >
          {data?.material && (
            <>
              <div
                style={{
                  color: "grey",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Material:
              </div>
              {data?.material}
            </>
          )}
        </p>
        <p className={styles.description}>{data?.description}</p>
      </div>
    </section>
  );
};

export default CColumn;
