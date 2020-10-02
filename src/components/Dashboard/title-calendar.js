import React from "react";
import { TextBold14 } from "./texts";
import { CalendarIcon } from "../icons";

function TitleAndCalendar(props) {
  return (
    <div className="flex-row space-between">
      <TextBold14
        style={{ width: props.title.length < 25 ? "120px" : "180px" }}
        content={props.title}
      />
      <CalendarIcon />
    </div>
  );
}

export default TitleAndCalendar;
