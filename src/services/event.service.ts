import { DayHourEvent, DayEvent } from "../types";

interface EventStep {
  [key: string]: number;
}

const resetEventStep = (eventHours: DayHourEvent[]) => {
  const eventStep: number = Math.max(
    ...eventHours.map((eventHour) => eventHour.step)
  );
  eventHours.forEach((eventHour) => (eventHour.step = eventStep));
};

const resetEventOverlapped = (
  hourlyEvents: DayHourEvent[],
  eventHours: DayHourEvent[]
) => {
  const firstCurrentEventHour = eventHours[0];
  if (firstCurrentEventHour.overlapping) {
    // check if it is overlapping with the first hour of prev event.
    const prevEventHours = hourlyEvents.filter(
      (hEvent) => hEvent.id === firstCurrentEventHour.id - 1
    );
    if (
      prevEventHours.length > 0 &&
      prevEventHours[0].hour === firstCurrentEventHour.hour
    ) {
      prevEventHours[0].overlapped = true;
    }
  }
};

const createHourlyEvents = (events: DayEvent[]): DayHourEvent[] => {
  let hourlyEvents: DayHourEvent[] = [];
  const eventStep: EventStep = {};

  events.forEach((currEvent, index) => {
    let from: number = currEvent.fromHour;
    let to: number = currEvent.toHour;
    const eventHours: DayHourEvent[] = [];
    Array.from(Array(to - from).keys()).forEach((hour) => {
      const currHour = from + hour;
      eventStep[currHour] = eventStep[currHour] ? eventStep[currHour] + 1 : 1;

      eventHours.push({
        ...currEvent,
        id: index,
        hour: currHour,
        title: from === currHour ? currEvent.title : "",
        starting: from === currHour,
        continuing: to !== currHour + 1,
        overlapping: eventStep[currHour] === 1 ? false : true,
        step: eventStep[currHour],
        overlapped: false,
      });
    });

    resetEventStep(eventHours);

    resetEventOverlapped(hourlyEvents, eventHours);

    hourlyEvents = hourlyEvents.concat(...eventHours);
  });

  return hourlyEvents;
};

export { createHourlyEvents };
