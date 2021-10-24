import styles from "./HourEventsWrapper.module.css";

interface HourEventsWrapperProps {
  hour: number;
  hasBody: boolean;
}

const HourEventsWrapper: React.FC<HourEventsWrapperProps> = ({
  children,
  hour,
  hasBody,
}) => {
  let hourBodyclasses = `${styles["hour-body"]} ${
    hasBody ? styles["hour-full-height"] : styles["hour-no-height"]
  }`;

  return (
    <div className={styles["hour-row"]}>
      <span className={styles["hour-text"]}>{hour}</span>
      <div className={hourBodyclasses}></div>
      {children}
    </div>
  );
};

export default HourEventsWrapper;
