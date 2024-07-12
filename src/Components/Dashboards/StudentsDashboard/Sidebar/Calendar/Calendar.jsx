import React from "react";
import "./Calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "./event";
import { CiSearch } from "react-icons/ci";

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

  const handleSelectedDates = (info) => {
    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
      };
      const data = [...this.state.events, newEvent];
      this.setState({ events: data });
      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };

  return (
    <div className="calender">
      <div className="calender-box">
        <div className="title">
          <h2>Your tests</h2>
        </div>
        <div className="filter flex items-center">
          <div className="hidden md:flex search-input relative">
            <CiSearch />
            <input
              type="search"
              name="search"
              className=""
              placeholder="Search something..."
            />
          </div>
          <select name="type">
            <option value="type">type</option>
            <option value="math">math</option>
            <option value="math">physic</option>
            <option value="math">arabic</option>
          </select>
          <select name="teacher">
            <option value="teacher">teacher</option>
            <option value="math">math</option>
            <option value="math">physic</option>
            <option value="math">arabic</option>
          </select>
          <select name="test">
            <option value="test">test</option>
            <option value="math">math</option>
            <option value="math">physic</option>
            <option value="math">arabic</option>
          </select>
        </div>
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
          onSelectEvent={(e) => handleSelectedDates(e)}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        />
      </div>
    </div>
  );
}

export default Calender;
