# Day Events

This application displays a list of events on a Day Calendar.

## description

This application draws events on the calendar in the form of blocks. Calendar has a default time between (dayStartingHour) 9 and (dayEndingHour) 21 hour. (9 am to 9 pm).

Each event would have a title, fromHour and toHour. Events list would be like... [{ fromHour: 10, toHour: 12, title: "Work" }, { fromHour: 11, toHour: 13, title: "Meeting" }, {fromHour: 14, toHour: 15, title: "Break"}]

The fromHour and toHour would always be integers and dayStartingHour <= fromHour, toHour <= dayEndingHour. Hours will be in 24 hour format.

If 2 or more events overlap between event times, the overlapped time(s) would be highlighted in red. You can have upto 5 overlapping events, not more than that.

Upon clicking any event, it would be deleted. And overlapped time would be re-calculated.

Implementation was done with React in TypeScript, no other libraries. Just 1 root Route that would display a list of events.

## How to run?

- Please make sure node is installed.
- Open terminal
- Run the command 'npm install' on terminal to install all dependencies
- Once all dependencies are installed, run 'npm start' on the terminal
- That's it. You would see app rendering on browser running on port 3000, if no other app is running on that port.
