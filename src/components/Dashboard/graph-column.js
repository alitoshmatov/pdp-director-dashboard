import React from "react";
import TotalIncome from "./total-income";
import SingleGraphChart from "./single-graph-chart";

function GraphColumn() {
  let incomeChartData = {
    xAxis: [],
    line: [[], []],

    lineTitle: ["Real pul", "No Real pul"],
    month: "sep",
    isMoney: true,
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

  function incomeFetchData() {
    for (let i = 1; i < 30; i++) {
      incomeChartData.xAxis.push(i);
      const random0 = Math.floor(Math.random() * 10000000);
      incomeChartData.line[0].push(random0);
      const random1 = Math.floor(Math.random() * 5000000);
      incomeChartData.line[1].push(random1);
    }
  }
  incomeFetchData();

  // Baught and Regstered
  let BuyRegisterChartData = {
    xAxis: [],
    line: [[], []],
    lineTitle: ["Sotib olgan", "Registered"],
    month: "sep",
    isMoney: false,
  };

  const BuyRegisterChartDesc = {
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

  function buyRegisterFetchData() {
    for (let i = 1; i < 30; i++) {
      BuyRegisterChartData.xAxis.push(i);
      const random0 = Math.floor(Math.random() * 25);
      BuyRegisterChartData.line[0].push(random0);
      const random1 = Math.floor(Math.random() * 30);
      BuyRegisterChartData.line[1].push(random1);
    }
  }
  buyRegisterFetchData();

  return (
    <div className="graph-column flex-column">
      <TotalIncome />
      <SingleGraphChart desc={incomeChartDesc} data={incomeChartData} />
      <SingleGraphChart
        desc={BuyRegisterChartDesc}
        data={BuyRegisterChartData}
      />
    </div>
  );
}

export default GraphColumn;
