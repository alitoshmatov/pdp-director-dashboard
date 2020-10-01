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
import IncomeChart from "./income-chart";
import BuyRegisterChart from "./buy-register-chart";

function GraphColumn() {
  return (
    <div className="graph-column flex-column">
      <TotalIncome />
      <IncomeChart />
      <BuyRegisterChart />
    </div>
  );
}

export default GraphColumn;
