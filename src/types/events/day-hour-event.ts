import { DayEvent } from "./day-event";

export interface DayHourEvent extends DayEvent {
  id: number;
  hour: number;
  starting: boolean;
  continuing: boolean;
  overlapping: boolean;
  overlapped: boolean;
  step: number;
}
