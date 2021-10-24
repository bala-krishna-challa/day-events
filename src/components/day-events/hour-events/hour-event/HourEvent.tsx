import { useDayEventContext } from "../../../../providers/day-event/DayEventContext";
import { DayHourEvent } from "../../../../types";
import styles from "./HourEvent.module.css";

interface HourEventProps {
  hourEvent: DayHourEvent;
}

const HourEvent: React.FC<HourEventProps> = ({ hourEvent }) => {
  const dayEventContext = useDayEventContext();
  const widthPerc: number = 20;

  let borderRadClasses = "";
  if (hourEvent.starting) {
    if (hourEvent.continuing) {
      borderRadClasses = styles["b-rad-top"];
    } else {
      borderRadClasses = styles["b-rad"];
    }
  } else if (!hourEvent.continuing) {
    borderRadClasses = styles["b-rad-bot"];
  }

  const stepWidth = `${widthPerc * (hourEvent.step - 1)}%`;

  let eventStyle = {
    zIndex: 5 + hourEvent.step,
    width: `calc(100% - ${stepWidth})`,
    left: `${stepWidth}`,
    backgroundColor: hourEvent.overlapping
      ? `rgb(138, 0, 0, ${stepWidth})`
      : "rgb(121, 134, 203)",
  };

  const deleteEvent = (id: number) => {
    dayEventContext.deleteEvent(id);
  };

  const titleTruncateWidth = hourEvent.overlapped
    ? { width: `${widthPerc}%` }
    : {};

  return (
    <div
      onClick={() => deleteEvent(hourEvent.id)}
      className={`${styles["event"]} ${borderRadClasses}`}
      style={eventStyle}
    >
      {hourEvent.title && (
        <div className={styles["event-title"]}>
          <span className={styles["title-truncate"]} style={titleTruncateWidth}>
            {hourEvent.title}
          </span>
          <span>
            ({hourEvent.fromHour} - {hourEvent.toHour})
          </span>
        </div>
      )}
    </div>
  );
};

export default HourEvent;
