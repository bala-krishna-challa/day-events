import { useState, useCallback, useEffect } from "react";
import { DayEventContext } from "./DayEventContext";
import { createHourlyEvents } from "../../services/event.service";
import {
  dayEvents,
  dayEndingHour,
  dayStartingHour,
} from "../../data/day-events";
import { DayEvent, DayHourEvent } from "../../types";

const DayEventProvider: React.FC = ({ children }) => {
  const [events, setEvents] = useState<DayEvent[]>([]);
  const [startingHour] = useState<number>(dayStartingHour);
  const [endingHour] = useState<number>(dayEndingHour);
  const [hourEvents, setHourEvents] = useState<DayHourEvent[]>([]);
  const [hours, setHours] = useState<number[]>([]);

  useEffect(() => {
    setEvents(dayEvents.sort((e1, e2) => e1.fromHour - e2.fromHour));
  }, []);

  useEffect(() => {
    const hours = Array.from(Array(endingHour - startingHour).keys()).map(
      (hour) => startingHour + hour
    );
    setHours(hours);
  }, [startingHour, endingHour]);

  useEffect(() => {
    const hourlyEvents = createHourlyEvents(events);
    setHourEvents(hourlyEvents);
  }, [events]);

  const deleteEventHandler = useCallback((index: number) => {
    setEvents((currEvents) => currEvents.filter((eve, ind) => ind !== index));
  }, []);

  const contextValue = {
    startingHour,
    endingHour,
    hours,
    hourEvents,
    deleteEvent: deleteEventHandler,
  };

  return (
    <DayEventContext.Provider value={contextValue}>
      {children}
    </DayEventContext.Provider>
  );
};

export default DayEventProvider;
