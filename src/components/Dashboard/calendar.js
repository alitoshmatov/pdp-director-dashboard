import React from "react";
import {
  TextMedium14,
  
} from "./texts";
import { CalendarIcon } from "../icons";

function Calendar() {
  return (
    <div className="flex-row align-center">
      <TextMedium14 content="Sentabr 2020" />
      <CalendarIcon />
    </div>
  );
}
export default Calendar;
