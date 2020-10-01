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

function LegendChart(props) {
  let content = props.content;
  return (
    <div className="flex-row align-center">
      <CircleIcon color={content.color} />
      <div className="flex-column">
        <TextMedium14 style={{ color: "#000" }} content={content.title} />
        <TextRegular14 content={content.subTitle} />
      </div>
    </div>
  );
}
export default LegendChart;
