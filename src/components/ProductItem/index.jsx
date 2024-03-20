import styles from "./productItem.module.css";

const ProductItem = ({ data }) => {
  return (
    <div className={styles.product_card}>
      <div
        style={{
          backgroundColor: "grey",
        }}
      >
        <img
          src={data?.productImage}
          alt={data?.name}
          className={styles.product_image}
        />
      </div>

      <div
        style={{
          padding: "20px",
        }}
      >
        <h3 className={styles.product_title}>{data?.name}</h3>
        <span className={styles.product_desc}>
          {data?.description?.slice(0, 50)}...
        </span>
        <div
          className={styles.product_desc}
          style={{
            color: "#000000cc",
          }}
        >
          ${data?.price}
        </div>
        {/* <span className="text-gray-500 mt-2">#{data?.price}</span> */}
      </div>
    </div>
  );
};

export default ProductItem;
