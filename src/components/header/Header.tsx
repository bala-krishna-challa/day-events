import styles from "./Header.module.css";

const Header: React.FC<{}> = () => (
  <div className={styles["events-header"]}>
    <h1>Day Events</h1>
  </div>
);

export default Header;
