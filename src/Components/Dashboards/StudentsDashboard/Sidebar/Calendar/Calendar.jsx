import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "./event";

const localizer = momentLocalizer(moment);

function Calender() {
  const events = MOCK_EVENTS.map((e) => {
    return {
      title: e.title,
      start: new Date(e.start),
      end: new Date(e.end),
      color: e.color,
    };
  });
  return (
    <div className="calender">
      <div className="calender-box">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "600px" }}
          eventPropGetter={(event) => {
            return {
              style: {
                backgroundColor: event.color,
              },
            };
          }}
          onSelectEvent={(e) => alert(e.title)}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        />
      </div>
    </div>
  );
}

export default Calender;
