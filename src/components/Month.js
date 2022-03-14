import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="calendar__month">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
