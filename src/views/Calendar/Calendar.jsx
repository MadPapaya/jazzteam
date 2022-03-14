import React, { useState, useContext, useEffect } from "react";
import "./Calendar.scss";

import { getMonth } from "../../util";
import CalendarHeader from "../../components/CalendarHeader";
import Month from "../../components/Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../../components/EventModal";

function Calendar() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
      <div className="calendar-page">
        {showEventModal && <EventModal />}
        <div className="calendar__container">
          <CalendarHeader />
          <div className="calendar__main">
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
  );
}

export default Calendar;
