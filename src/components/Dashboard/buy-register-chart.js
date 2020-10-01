import React from "react";
import Chart from "./chart";
import ChartDescription from "./chart-description";

function BuyRegisterChart() {
  let chartData = {
    xAxis: [],
    line: [[], []],
    lineTitle: ["Sotib olgan", "Registered"],
    month: "sep",
    yLabelFormat: "",
  };

  const BuyRegisterChartData = {
    title: "Sotib olgan va ro'yxatdan o'tganlar",
    line: [
      {
        title: "Sotib olgan",
        subTitle: "",
        color: "#00B533",
      },
      {
        title: "Registered",
        subTitle: "",
        color: "#FFB436",
      },
    ],
  };

  function fetchData() {
    for (let i = 1; i < 30; i++) {
      chartData.xAxis.push(i);
      const random0 = Math.floor(Math.random() * 25);
      chartData.line[0].push(random0);
      const random1 = Math.floor(Math.random() * 30);
      chartData.line[1].push(random1);
    }
  }
  fetchData();

  return (
    <div>
      <div className="data-block flex-column">
        <ChartDescription content={BuyRegisterChartData} />
        <Chart data={chartData} />
      </div>
    </div>
  );
}

export default BuyRegisterChart;
