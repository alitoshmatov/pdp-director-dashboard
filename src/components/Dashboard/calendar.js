import React from "react";
import {
  TextBold14,
  TextMedium16,
  TextRegular14,
  TextSB30,
  TextHeavy40,
  TextRegular16,
  TextMedium14,
  TextMedium10,
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
