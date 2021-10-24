import { DayHourEvent } from "../../../../types";
import HourEvent from "../hour-event/HourEvent";

interface HourEventsListProps {
  hourEvents: DayHourEvent[];
}

const HourEventsList: React.FC<HourEventsListProps> = ({ hourEvents }) => {
  const events = hourEvents.map((hEvent, ind) => (
    <HourEvent key={ind} hourEvent={hEvent}></HourEvent>
  ));

  return <>{events}</>;
};

export default HourEventsList;
