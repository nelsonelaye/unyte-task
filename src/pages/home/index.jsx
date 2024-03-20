import { useState } from "react";
import ISearch from "../../components/ISearch";
import products from "../../data/products";
import ProductItem from "../../components/ProductItem";
import styles from "../../styles/home.module.css";

import searchIcon from "../../assets/images/search.svg";
const Home = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(products);

  const handleSearch = () => {
    const data = products.filter((e) =>
      e.name.toLowerCase().includes(query.toLowerCase())
    );

    setResult(data);
  };
  return (
    <div
      style={{
        padding: "0px 24px",
      }}
    >
      <ISearch
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setTimeout(() => {
            handleSearch();
          }, 2000);
        }}
        onKeyDown={handleSearch}
        icons={searchIcon}
      />

      <main className={styles.main_view}>
        <h3 className={styles.result_header}>{result.length} products</h3>

        <div className={styles.product_list}>
          {result?.map((e) => (
            <ProductItem key={e.id} data={e} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
