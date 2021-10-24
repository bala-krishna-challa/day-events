import styles from "./Hours.module.css";
import HourEvents from "../hour-events/HourEvents";
import { useDayEventContext } from "../../../providers/day-event/DayEventContext";

const Hours: React.FC = ({ children }) => {
  const dayEventContext = useDayEventContext();
  return (
    <div className={styles["hours"]}>
      {children}
      <HourEvents
        hour={dayEventContext.endingHour}
        hourEvents={[]}
        hasBody={false}
      />
    </div>
  );
};

export default Hours;
