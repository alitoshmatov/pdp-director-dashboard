import React from "react";
import { TextRegular14, TextMedium14 } from "./texts";
import { CalendarIcon, CircleIcon } from "../icons";

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
