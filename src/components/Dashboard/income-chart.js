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
import ChartDescription from "./chart-description";

function IncomeChart() {
  let chartData = {
    xAxis: [],
    line: [[], []],

    lineTitle: ["Real pul", "No Real pul"],
    month: "sep",
    yLabelFormat: "M",
  };

  const incomeChartDesc = {
    title: "Tushumlar kategoriyalar bo’yicha",
    line: [
      {
        title: "Real pul",
        subTitle: "Payme, Yandex",
        color: "#00B533",
      },
      {
        title: "No Real pul",
        subTitle: "Vaucher, Cashback",
        color: "#FFB436",
      },
    ],
  };

  function fetchData() {
    for (let i = 1; i < 30; i++) {
      chartData.xAxis.push(i);
      const random0 = (Math.random() * 10).toFixed(1);
      chartData.line[0].push(random0);
      const random1 = (Math.random() * 5).toFixed(1);
      chartData.line[1].push(random1);
    }
  }
  fetchData();

  return (
    <div className="data-block income-chart flex-column">
      <ChartDescription content={incomeChartDesc} />
      <Chart data={chartData} />
    </div>
  );
}

export default IncomeChart;
