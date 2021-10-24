import React from "react";
import Hours from "./hours/Hours";
import HourEvents from "./hour-events/HourEvents";
import { useDayEventContext } from "../../providers/day-event/DayEventContext";

const DayEvents: React.FC = () => {
  const dayEventContext = useDayEventContext();

  const elemHourEvents = dayEventContext.hours.map((hour, ind) => {
    const currentHourEvents = dayEventContext.hourEvents.filter(
      (hEvent) => hEvent.hour === hour
    );
    return (
      <HourEvents
        key={ind}
        hourEvents={currentHourEvents}
        hour={hour}
        hasBody={true}
      />
    );
  });

  return <Hours>{elemHourEvents}</Hours>;
};

export default DayEvents;
