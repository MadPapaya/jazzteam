import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)} 
      className="border p-2 flex items-center shadow-md ml-5"
    >
      <span className="pl-7 pr-7"> Update</span>
    </button>
  );
}
