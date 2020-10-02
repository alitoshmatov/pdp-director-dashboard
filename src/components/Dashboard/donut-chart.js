import React from "react";
import { TextHeavy40, TextRegular14 } from "./texts";
import ReactApexChart from "react-apexcharts";
import FormatMoney from "../format-money";

function DonutChart(props) {
  function sum(arr) {
    let sum = 0;
    arr.map((item) => {
      sum = sum + item;
    });
    if (props.data.isMoney) {
      return FormatMoney(sum);
    } else {
      return sum.toString();
    }
  }

  let mainText = sum(props.data.values);

  let mainFontSize = mainText.length <= 5 ? "30px" : "13px";
  let state = {
    series: props.data.values,
    options: {
      tooltip: {
        y: {
          formatter: function (value) {
            if (props.data.isMoney) {
              return FormatMoney(value);
            } else {
              return value;
            }
          },
        },
      },
      colors: ["#00B533", "#ffb436", "#FF6279", "#4BC2C6"],
      dataLabels: { enabled: false },
      labels: props.data.labels,
      chart: {
        type: "donut",
      },
      legend: { show: false },
    },
  };

  return (
    <div id="chart" className="flex-column align-center">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
      <div
        style={{ position: "relative", bottom: "50%" }}
        className="flex-column align-center"
      >
        <TextHeavy40 content={mainText} style={{ fontSize: mainFontSize }} />
        <TextRegular14
          style={{ fontSize: "12px" }}
          content={props.data.subTitle}
        />
      </div>
    </div>
  );
}

export default DonutChart;
