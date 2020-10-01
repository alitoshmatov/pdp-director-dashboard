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
import { CalendarIcon, CircleIcon } from "../icons";
import Chart from "./chart";
import Calendar from "./calendar";
import LegendChart from "./legend-chart";

function ChartDescription(props) {
  let content = props.content;

  return (
    <div
      className="flex-row space-between align-center"
      style={{ margin: "20px" }}
    >
      <TextBold14 style={{ width: "200px" }} content={content.title} />
      <LegendChart content={content.line[0]} />
      <LegendChart content={content.line[1]} />
      <Calendar />
    </div>
  );
}

export default ChartDescription;
