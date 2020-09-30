import React from "react";
import {
  TextBold14,
  TextMedium16,
  TextRegular14,
  TextSB30,
  TextHeavy40,
  TextRegular16,
  TextMedium14,
} from "./texts";
import { CalendarIcon } from "../icons";
import TotalIncome from "./total-income";

function GraphColumn() {
  return (
    <div className="graph-column flex-column">
      <TotalIncome />
    </div>
  );
}

export default GraphColumn;
