import dayjs from "dayjs";
import React, { useContext } from "react";
import CreateEventButton from "./CreateEventButton";
import UpdateEventButton from "./UpdateEventButton";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <div className="calendar__header">
      <div className="calendar__header__top">
      <CreateEventButton />
      <UpdateEventButton />
      </div>

      <header className="px-4 py-2 flex items-center calendar__header__bottom">
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <h2 className="text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>
        <button
          onClick={handleReset}
          className="border rounded py-2 px-4 mr-5"
        >
          Today
        </button>
      </header>
    </div>
  );
}
