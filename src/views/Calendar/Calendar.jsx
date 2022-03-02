import React, { useState, useContext, useEffect } from "react";
import "./Calendar.scss";

import { getMonth } from "../../util";
import CalendarHeader from "../../components/CalendarHeader";
import Month from "../../components/Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../../components/EventModal";
import ContextWrapper from "../../context/ContextWrapper";
import "../../index.css";

function Calendar() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <ContextWrapper>
      <div className="calendar-page">
        {showEventModal && <EventModal />}
        <div className="h-screen flex flex-col calendar">
          <CalendarHeader />
          <div className="flex flex-1 calendar__main">
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </ContextWrapper>
  );
}

export default Calendar;
