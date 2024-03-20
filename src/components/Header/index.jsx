import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const location = useLocation();

  console.log(location.pathname);
  const navigations = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Compare",
      link: "/compare",
    },
  ];
  return (
    <header className={styles.header}>
      <nav className={styles.navigations}>
        {navigations.map((n) => (
          <Link
            key={n.title}
            className={`${styles.nav_item} ${
              n.link === location.pathname ? styles.active : ""
            }`}
            to={n.link}
          >
            {n.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
