import { DayHourEvent } from "../../../types";
import HourEventsWrapper from "./hour-events-wrapper/HourEventsWrapper";
import HourEventsList from "./hour-events-list/HourEventsList";

interface HourEventsProps {
  hourEvents: DayHourEvent[];
  hour: number;
  hasBody: boolean;
}

const HourEvents: React.FC<HourEventsProps> = ({
  hour,
  hourEvents,
  hasBody,
}) => (
  <HourEventsWrapper hour={hour} hasBody={hasBody}>
    <HourEventsList hourEvents={hourEvents}></HourEventsList>
  </HourEventsWrapper>
);

export default HourEvents;
