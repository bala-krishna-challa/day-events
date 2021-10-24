import { createContext, useContext } from "react";
import { DayHourEvent } from "../../types";
interface DayEventContextContent {
  startingHour: number;
  endingHour: number;
  hours: number[];
  hourEvents: DayHourEvent[];
  deleteEvent: (ind: number) => void;
}
export const DayEventContext = createContext<DayEventContextContent>({
  startingHour: 0,
  endingHour: 0,
  hours: [],
  hourEvents: [],
  deleteEvent: () => {},
});

export const useDayEventContext = () => useContext(DayEventContext);
