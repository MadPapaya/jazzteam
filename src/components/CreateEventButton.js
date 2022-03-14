import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 flex items-center shadow-md bg-white"
    >
      <span className="pl-7 pr-7"> Create</span>
    </button>
  );
}
